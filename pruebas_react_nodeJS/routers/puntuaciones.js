import express from 'express';
let router = express.Router();
import * as controller from '../controller/puntuacion.js'
import * as verify from '../middleware/verifyToken.js';

router.get('/', controller.getAll);
router.get('/puntuacionesCero', controller.getScoresCero);
router.get('/:id', controller.getById);

router.post('/', controller.insert);
/*insert fields validating fields*/
router.post('/insertValidate', controller.insertValidate);

router.delete('/:id', controller.remove);

/*delete todas las puntuaciones si estás logged */
router.delete('/removeAll', verify.auth ,controller.removeAll);

router.put('/:id', controller.update);

export {router};


