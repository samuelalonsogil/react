let Puntuacion = require('../models/puntuacion');

async function getAll(req, res){
    try{
        let puntuaciones = await Puntuacion.find();
        res.status(200).json( {accion: 'get all', datos: puntuaciones} );
    }catch (err){
        res.status(500).json( {accion: 'get all', mensaje: 'error al obtener las puntuaciones'} );
    }

    module.exports = {getAll};
}