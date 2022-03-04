import {Puntuacion} from "../models/puntuacion.js";
import Joi from 'joi';

const schemaInsertar = Joi.object({
        name:Joi.string().min(3).max(5) ,
        puntuacion : Joi.number().integer().min(0).max(5).required(),
        user : Joi.string().min(10)
    });

/*lista todos los elementos*/
async function getAll(req, res){
    try{
        let puntuaciones = await Puntuacion.find();
        res.status(200).json( {accion: 'get all', datos: puntuaciones} );
    }catch (err){
        res.status(500).json( {accion: 'get all', mensaje: 'error al obtener las puntuaciones'} );
    }
}

/*lista todos elementos con valor 0*/
async function getScoresCero(req, res){
    try{
        let puntuaciones = await Puntuacion.find( {puntuacion : 0} );
        res.status(200).json( {accion: 'get puntuaciones con score = 0', datos: puntuaciones} );
    }catch (err){
        res.status(500).json( {accion: 'get puntuaciones con score = 0', mensaje: 'error al obtener las puntuaciones'} );
    }
}

/*listar elemento por id*/
async function getById(req, res){
    let puntuacionId = req.params.id;

    try{
        let puntuaciones = await Puntuacion.findById(puntuacionId);
        res.status(200).json( {accion: 'get one', datos: puntuaciones} );
    }catch (err){
        res.status(500).json( {accion: 'get one', mensaje: 'error al obtener la puntuacion'} );
    }
}

/*insertar elemento*/
async function insert(req, res){
    let puntuacion = new Puntuacion(req.body);
    try{
        let puntuacionGuardada = await puntuacion.save();
        res.status(200).json( {accion: 'save one', datos: puntuacionGuardada} );
    }catch (err){
        res.status(500).json( {accion: 'save', mensaje: 'error al guardar puntuacion' } );
    }
}


/*insertar elemento validando campos*/
async function insertValidate(req, res){

    /*validate fields*/
    try{
        const{error,value}=await schemaInsertar.validateAsync(req.body);
        console.log(value)
        console.log(error)
    }catch(err){
        return res.status(400).json( { accion: 'insertar puntuaciones', mensaje: 'error insertar puntuaciones ' + err } )
    }

    let puntuacion = new Puntuacion(req.body);
    try{
        let puntuacionGuardada = await puntuacion.save();
        res.status(200).json( {accion: 'save one', datos: puntuacionGuardada} );
    }catch (err){
        res.status(500).json( {accion: 'save', mensaje: 'error al guardar puntuacion' } );
    }
}


/*eliminar elemento por id*/
async function remove(req, res){
    let puntuacionId = req.params.id;
    try{
        let puntuacionBorrada = await Puntuacion.findByIdAndDelete(puntuacionId);
        res.status(200).json( {accion: 'remove one', datos: puntuacionBorrada} );
    }catch (err){
        res.status(500).json( {accion: 'remove', mensaje: 'error al borrar puntuacion' } );
    }
}

/*eliminar todas las puntuaciones*/
async function removeAll(req, res){
    try{
        await Puntuacion.deleteMany();
        res.status(200).json( {accion: 'remove all'} );
    }catch (err){
        res.status(500).json( {accion: 'remove all', mensaje: 'error al borrar todas' } );
    }
}

/*edit elemento por id*/
async function update(req, res){
    let datos = req.body;
    let puntuacionId = req.params.id;
    try{
        let puntuacionUpdated = await Puntuacion.findByIdAndUpdate(puntuacionId, datos);
        res.status(200).json( {accion: 'update one', datos: puntuacionUpdated} );
    }catch (err){
        res.status(500).json( {accion: 'update', mensaje: 'error al update puntuacion' } );
    }
}


export {getAll, getById, insert, remove, update, getScoresCero, removeAll, insertValidate};