import express from 'express';
var router = express.Router();

import * as controller from '../controller/puntuacion.js';
import * as verify from '../middlewares/verifyToken.js';

// CRUD (Create, Read, Update, Delete)

// obtener todos las puntuciones
// GET http://localhost:5300/puntuacion/
router.get('/', controller.getAll)

// obtener una puntuacion por id
// GET http://localhost:5300/puntuacion/5e9f8f8f8f8f8f8f8f8f8f8

router.get('/:id', controller.getById)
// Solución ejercicio 13
router.get('/puntuacionesCero', controller.getPuntuacionesCero)

// insertar una puntuacion (POST)
router.post('/', controller.insert)

// Solucion ejercicio 13 (importante ponerlo antes del endpoint de borrado)
router.delete('/all', verify.auth, controller.removeAll)

// borrar una puntuacion (DELETE)
router.delete('/:id', controller.remove)



// actualizar una puntuacion (PUT)
router.put('/:id', controller.update)

export { router };

// localhost:5300/puntuacion/   <-- obtener todas las puntuaciones
// localhost:5300/puntuacion/xxxxxxx  <-- obtener una puntuacion en particular
// DELETE   localhost:5300/puntuacion/xxxxxxx  <-- borrar una puntuacion en particular