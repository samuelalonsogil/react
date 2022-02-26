import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
import {router as routerPuntuacion} from './routers/puntuaciones.js';

let app = express();

app.use(bodyParser.urlencoded( {extended:false} )  );
app.use(bodyParser.json() );
app.use( morgan('dev') );
app.use( '/puntuacion', routerPuntuacion );

app.use( (req, res, next) =>{
    res.header( 'Acces-Control-Allow-Origin','*' )
} )