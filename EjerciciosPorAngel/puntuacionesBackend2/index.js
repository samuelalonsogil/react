import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
import {router as routerPuntuacion}  from './routers/puntuacion.js';
import {router as routerUsuario}  from './routers/usuario.js';
import {router as routerProducto}  from './routers/producto.js';

dotenv.config();
var app = express();
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(cors())
app.use(morgan('dev'))

/*app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});*/


//http://localhost:5300/puntuacion/
app.use('/puntuacion', routerPuntuacion)
app.use('/usuario', routerUsuario)
app.use('/producto', routerProducto)

app.get('/', (req, res) => { res.send('Bienvenido a nuestro backend') })

const run = async () => {
    await mongoose.connect(process.env.URL_BASEDATOS, { useNewUrlParser: true, useUnifiedTopology: true })
    await app.listen(process.env.PUERTO_SERVIDOR)
    console.log("Servidor y base de datos arrancados")
}

run().catch(err => console.log('Fallo al arrancar:' + err))