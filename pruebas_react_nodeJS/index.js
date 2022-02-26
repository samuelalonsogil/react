import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
import {router as routerPuntuacion} from './routers/puntuaciones.js';

let app = express();

/*bodyParser para transformar las peticiones de tipo text a json*/
app.use(bodyParser.urlencoded( {extended:false} )  );
app.use(bodyParser.json() );

app.use( morgan('dev') );
app.use( cors() );

/*http://localhost:localhost5300/puntuacion*/
app.use( '/puntuacion', routerPuntuacion );

const run = async () => {
    await mongoose.connect(  )
}

