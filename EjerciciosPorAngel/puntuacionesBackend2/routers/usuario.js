import express from 'express';
var router = express.Router();

import * as controller from '../controller/usuario.js';

// Obtener todos los usuarios
router.get('/',  controller.getAll)
// Obtener un usuario por su id
router.get('/:id', controller.getById)
// Insertar un usuario nuevo
router.post('/register', controller.register)
// Realizamos el login en la BD
router.post('/login', controller.login)
// Borra un usuario 
router.delete('/:id', controller.remove)
// Actualiza los datos de un usuario
router.put('/:id', controller.update)

// Muestra las puntuaciones de un usuario en particular
router.get('/:id/puntuacion', controller.getPuntuacionesUsuario)
// Inserta una puntuacion a un usuario en particular
router.post('/:id/puntuacion', controller.insertPuntuacion)
// ...
export { router };