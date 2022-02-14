import express from 'express';
let router = express.Router();

import * as controller from '../controller/puntuacion.js';

/*obtener todass las puntuaciones*/
//GET http://localhost:5300/puntuacion/
router.get('/', /*verify.auth,*/ controller.getAll)

// obtener una puntuacion por id
// GET http://localhost:5300/puntuacion/5e9f8f8f8f8f8f8f8f8f8f8
router.get('/:id', controller.getById)

// insertar una puntuacion (POST)
router.post('/',verify.auth, controller.insert)

// borrar una puntuacion (DELETE)
router.delete('/:id', controller.remove)

// actualizar una puntuacion (PUT)
router.put('/:id', controller.update)

// localhost:5300/puntuacion/   <-- obtener todas las puntuaciones
// localhost:5300/puntuacion/xxxxxxx  <-- obtener una puntuacion en particular
// DELETE   localhost:5300/puntuacion/xxxxxxx  <-- borrar una puntuacion en particular

export { router };