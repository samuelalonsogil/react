import {User} from "../models/user.js";
import Joi from 'joi';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import mongoose from "mongoose";
import {Puntuacion} from "../models/puntuacion.js";


const schemaLogin = Joi.object( {
    email: Joi.string().email( {
        minDomainSegments:2,
        tlds: { allow: [ 'es','com','net'] }

    } ).required(),
    password: Joi.string().pattern( new RegExp( '^[a-zA-Z0-9]{3,30}$' ) ).required(),

} )

const schemaRegister = Joi.object( {
    userName:Joi.string().alphanum().min(3).max(30).required(),
    email:Joi.string().email( {
        minDomainSegments:2, tlds: { allow: [ 'es','com','net'] }
    } ),
    password: Joi.string().pattern( new RegExp( '^[a-zA-Z0-9]{3,30}$' ) ).required(),
} )


/*loggearse*/
async function loginUser(req, res){

    /*validate fields*/
    try{
        const{error,value}=await schemaLogin.validateAsync(req.body);
        console.log(value)
        console.log(error)
    }catch(err){
        return res.status(400).json( { accion: 'login', mensaje: 'error logging ' + err } )
    }

    /*check if user exists*/
    let existingUser = await User.findOne( {email:req.body.email} );
    !existingUser ? res.status(400).json( { accion:'login', mensaje: 'error logging' } ) : console.log('user exists');

    /*check password */
    const validPassword = await bcrypt.compare( req.body.password, existingUser.password );
    !validPassword ? res.status(400).json( { accion:'login', mensaje: 'wrong password/user' } ) : console.log('correct data');

    /*create token jwt ( jsonwebtoken )*/
    const token = jwt.sign(
        {
            _id:existingUser._id,
            exp:Math.floor( Date.now()/1000 ) + ( 60 * 60 ), /*dura 1 hora*/
            joke: 'de qué color es el caballo blanco de santiago?',
            bestFramework: 'react'
        },
        process.env.TOKEN_SECRETO
    )
    res.header('auth-token',token);
    res.status(200).send( { token } );

}

/*register user*/
async function register(req, res){

    try {
        const { error, value } = await schemaRegister.validateAsync(req.body)
        console.log(value)
        console.log(error)
    }
    catch (err) {
        return res.status(400).json({accion:'register user', mensaje:'error al guardar el usuario'+err})
    }

    try{
        /*check if user exists*/
        let existingUser = await User.findOne( {email:req.body.email} );
        existingUser ? res.status(400).json( { accion:'register', mensaje: 'error register, user already exists' } ) : console.log('user exists');

    }catch (err){
        return res.status(400).json( { accion: 'register', mensaje: 'error register ' + err } );
    }

    /*password hash*/
    const salt = await bcrypt.genSalt( 10 );
    const hashPassword = await bcrypt.hash( req.body.password, salt );
    const user = new User( req.body );
    user.scores = [];
    user.password = hashPassword;
    try{
        let savedUser = await user.save();
        res.status(200).json( { accion: 'save user', datos:savedUser } );
    }catch (err){
        res.status(500).json( { accion: 'save user', mensaje: 'error saving user' } );
    }

}

/*lista todos los elementos*/
async function getAll(req, res){
    try{
        let users = await User.find();
        res.status(200).json( {accion: 'get all users', datos: users} );
    }catch (err){
        res.status(500).json( {accion: 'get all users', mensaje: 'error al obtener users'} );
    }
}

/*listar elemento por id*/
async function getById(req, res){
    let userId = req.params.id;

    try{
        let user = await User.findById(userId);
        res.status(200).json( {accion: 'get one user', datos: user} );
    }catch (err){
        res.status(500).json( {accion: 'get one user', mensaje: 'error al obtener la puntuacion'} );
    }
}

/*eliminar elemento por id*/
async function remove(req, res){
    let userId = req.params.id;
    try{
        let deletedUser = await User.findByIdAndDelete(userId);
        res.status(200).json( {accion: 'remove one user', datos: deletedUser} );
    }catch (err){
        res.status(500).json( {accion: 'remove user', mensaje: 'error al borrar user' } );
    }
}

/*eliminar todos lso elementos*/
async function removeAll(req, res){
    try{
        await User.deleteMany();
        res.status(200).json( {accion: 'remove all users'} );
    }catch (err){
        res.status(500).json( {accion: 'remove all users', mensaje: 'error al borrar todos los users' } );
    }
}

/*edit elemento por id*/
async function update(req, res){
    let data = req.body;
    let userId = req.params.id;
    try{
        let userUpdated = await User.findByIdAndUpdate(userId, data);
        res.status(200).json( {accion: 'update one user', datos: userUpdated} );
    }catch (err){
        res.status(500).json( {accion: 'update user', mensaje: 'error al update user' } );
    }
}

/*insert score in user*/
async function insertScore(req,res){
    const session = await mongoose.startSession();

    try{

        session.startTransaction();

        let userId = req.params.id;
        let userSearched = await User.findById(userId);
        let newPuntuation = new Puntuacion(req.body);
        let savedPuntuation = await newPuntuation.save();
        userSearched.scores.push(savedPuntuation);
        let savedUser = await userSearched.save();

        await session.commitTransaction();

        res.status(200).json( { accion: 'save', datos: savedUser } );
    }catch ( err ){
        console.log(err);
        await session.abortTransaction();
        res.status(500).json( { accion: 'save', mensaje: 'error saving score' } );
    }
}

/*show scores by id*/
async function showScoresById(req, res){

    try{
        let userId = req.params.id;
        let user = await User.findById(userId);
        let userName = user.userName;
        let userScores = user.scores;

        res.status(200).json( {accion: 'get one user',userName:userName, datos: userScores} );
    }catch (err){
        res.status(500).json( {accion: 'get one user', mensaje: 'error al obtener la puntuacion'} );
    }

}

export {getAll, getById, remove, update, removeAll, register, loginUser, insertScore, showScoresById};