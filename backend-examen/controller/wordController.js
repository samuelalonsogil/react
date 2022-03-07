import {Word} from "../models/wordModel.js";
import Joi from 'joi';

/*lista todos los elementos*/
async function getAll(req, res){
    try{
        let words = await Word.find();
        res.status(200).json( {accion: 'get all words', datos: words} );
    }catch (err){
        res.status(500).json( {accion: 'get all words', mensaje: 'error getting all words'} );
    }
}


/*insertar elemento*/
async function insert(req, res){
    let word = new Word(req.body);
    try{
        let savedWord = await word.save();
        res.status(200).json( {accion: 'save one word', datos: savedWord} );
    }catch (err){
        res.status(500).json( {accion: 'save one word', mensaje: 'error saving word' } );
    }
}

export {insert, getAll}