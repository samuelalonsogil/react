import { Puntuacion } from '../models/puntuacion.js';


import Joi from 'joi';
//const schemaInsertar = Joi.number().integer().min(0).max(5).required()
const schemaInsertar= Joi.object({
    puntuacion: Joi.number().integer().min(0).max(5).required(),
    date: Joi.date(),
  })



async function getAll(req, res) {
    if(req.query.mayor){
        try { // si me han pasado parametros en la query
            let puntuaciones = await Puntuacion.find({puntuacion: {$gt: req.query.mayor}});
            res.status(200).json({ accion: 'get mayor que', datos: puntuaciones })
        } catch (err) {
            res.status(500).json({ accion: 'get mayor que', mensaje: 'error al obtener las puntuaciones mayor a un valor dado' })
        }
    }else{ // no me han pasado parametros en la query
        try {
            let puntuaciones = await Puntuacion.find();
            res.status(200).json({ accion: 'get all', datos: puntuaciones })
        } catch (err) {
            res.status(500).json({ accion: 'get all', mensaje: 'error al obtener las puntuaciones' })
        }
    }
    //callbacks
    /* Puntuacion.find({}).exec( (err, puntuaciones)=>{
         if(err){
             res.status(500).send({accion:'get all', mensaje:'error al obtener la puntuacion'})
         }else{
             res.status(200).send({accion:'get all', datos: puntuaciones})
         }
     })*/
    // promesas 
    /*Puntuacion.find().exec()
        .then(puntuaciones => res.status(200).send({accion:'get all', datos: puntuaciones}) )
        .catch(err => res.status(500).send({accion:'get all', mensaje:'error al obtener la puntuacion'}) )
    */
    // async await
    

}



async function getById(req, res) {
    let puntuacionId = req.params.id;

    try {
        let puntuacion = await Puntuacion.findById(puntuacionId);
        res.status(200).json({ accion: 'get one', datos: puntuacion })
    } catch (err) {
        res.status(500).json({ accion: 'get one', mensaje: 'error al obtener la puntuacion' })
    }
}



async function insert(req, res) {
    /* var datos = req.body;
     var puntuacion = new Puntuacion();
     puntuacion.nombre = datos.nombre;
     puntuacion.puntuacion = datos.puntuacion;*/
    const puntuacion = new Puntuacion(req.body)

    try {
        //await schemaInsertar.validateAsync(puntuacion.puntuacion)
        //await schemaInsertar.validateAsync(puntuacion)
    } catch (err) {
        res.status(406).json({ accion: 'save', mensaje: 'error validar la puntuacion' })
    }
    try {
        let puntuacionGuardada = await puntuacion.save();
        res.status(200).json({ accion: 'save', datos: puntuacionGuardada })
    } catch (err) {
        console.log(err)
        res.status(500).json({ accion: 'save', mensaje: 'error al guardar la puntuacion' })
    }

}


async function remove(req, res) {
    let puntuacionId = req.params.id;
    try {
        let puntuacionBorrada = await Puntuacion.findByIdAndDelete(puntuacionId);
        res.status(200).json({ accion: 'delete', datos: puntuacionBorrada })
    } catch (err) {
        res.status(500).json({ accion: 'delete', mensaje: 'error al borrar la puntuacion' })
    }
}


async function update(req, res) {
    var datos = req.body;
    let puntuacionId = req.params.id;

    try {
        let puntuacionActualizada = await Puntuacion.findByIdAndUpdate(puntuacionId, datos);
        res.status(200).json({ accion: 'update', datos: puntuacionActualizada })
    } catch (err) {
        res.status(500).json({ accion: 'update', mensaje: 'error al actualizar la puntuacion' })
    }
}
// Ojo con populate
async function getPuntuacionesUsuario(req, res) {
    let usuarioId = req.params.id;

    try {
        let usuario = await Usuario.findById(usuarioId).populate('puntuaciones');
        res.status(200).json({ accion: 'get one', datos: usuario })
    } catch (err) {
        res.status(500).json({ accion: 'get one', mensaje: 'error al obtener el usuario' })
    }
}



async function insertPuntuacion(req, res) {
    const session = await mongoose.startSession();
    try {
        session.startTransaction();

        let usuarioId = req.params.id;
        // Buscamos el usuario
        let usuarioBuscado = await Usuario.findById(usuarioId);
        // Creamos una nueva puntuacion (con el body)
        let puntuacionNueva = new Puntuacion(req.body)
        // asignamos la puntuacion al usuairo
        // puntuacionNueva.usuario = usuarioBuscado;
        // Guardamos la puntuacion
        let puntuacionGuardada = await puntuacionNueva.save();
        // colocamos la puntuación dentro del usuario 
        usuarioBuscado.puntuaciones.push(puntuacionGuardada)
        // Guardamos el usuario
        let usuarioGuardado = await usuarioBuscado.save();

        await session.commitTransaction();
        //session.endSession();

        res.status(200).json({ accion: 'save', datos: usuarioGuardado })
    } catch (err) {
        console.log(err)
        await session.abortTransaction();
        res.status(500).json({ accion: 'save', mensaje: 'error al guardar la puntuacion en el usuario' + err })
    } finally {
        session.endSession();
    }

}

async function getPuntuacionesCero(req, res) {
    try {
        let puntuaciones = await Puntuacion.find({ puntuacion: 0 });
        res.status(200).json({ accion: 'get value cero', datos: puntuaciones })
    } catch (err) {
        res.status(500).json({ accion: 'get value cero', mensaje: 'error al obtener las puntuaciones con valor cero' })
    }
}


async function removeAll(req, res) {
    /*let puntuaciones = await Puntuacion.find();
    for(let i=0; i<puntuaciones.length; i++){
        await Puntuacion.findByIdAndDelete(puntuaciones[i]._id);
    }*/
    try {
        await Puntuacion.deleteMany({})
        // await Puntuacion.collection.drop()
        res.status(200).json({ accion: 'remove all' })
    } catch (err) {
        res.status(500).json({ accion: 'remove all', mensaje: 'error borrar todas las puntuaciones' })
    }

}


export { getAll, getById, insert, remove, update, getPuntuacionesCero, removeAll }
