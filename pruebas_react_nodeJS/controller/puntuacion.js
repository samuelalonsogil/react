import {Puntuacion} from "../models/puntuacion.js";


async function getAll(req, res){
    try{
        let puntuaciones = await Puntuacion.find();
        res.status(200).json( {accion: 'get all', datos: puntuaciones} );
    }catch (err){
        res.status(500).json( {accion: 'get all', mensaje: 'error al obtener las puntuaciones'} );
    }
}

async function getById(req, res){
    let puntuacionId = req.params.id;

    try{
        let puntuaciones = await Puntuacion.findById(puntuacionId);
        res.status(200).json( {accion: 'get one', datos: puntuaciones} );
    }catch (err){
        res.stat(500).json( {accion: 'get one', mensaje: 'error al obtener la puntuacion'} );
    }
}

async function insert(req, res){
    let puntuacion = new Puntuacion(req.body);
    try{
        let puntuacionGuardada = await puntuacion.save();
        res.status(200).json( {accion: 'save one', datos: puntuacionGuardada} );
    }catch (err){
        res.stat(500).json( {accion: 'save', mensaje: 'error al guardar puntuacion' } );
    }
}

async function remove(req, res){
    let puntuacionId = req.params.id;
    try{
        let puntuacionBorrada = await Puntuacion.findByIdAndDelete(puntuacionId);
        res.status(200).json( {accion: 'remove one', datos: puntuacionBorrada} );
    }catch (err){
        res.stat(500).json( {accion: 'remove', mensaje: 'error al borrar puntuacion' } );
    }
}


async function update(req, res){
    let puntuacionId = req.params.id;
    try{
        let puntuacionUpdated = await Puntuacion.findByIdAndUpdate(puntuacionId);
        res.status(200).json( {accion: 'update one', datos: puntuacionUpdated} );
    }catch (err){
        res.stat(500).json( {accion: 'update', mensaje: 'error al update puntuacion' } );
    }
}


module.exports = {getAll, getById, insert, remove, update};