import express from 'express';
let router = express.Router();
import * as controller from '../controller/puntuacion.js'
import * as verify from '../middleware/verifyToken.js';


/*delete todas las puntuaciones si estás logged */
router.delete('/removeAll', verify.auth ,controller.removeAll);
router.get('/', controller.getAll);
router.get('/puntuacionesCero', controller.getScoresCero);

router.get('/puntuacionesHigherThan', controller.getScoresHigherThan);

router.get('/:id', controller.getById);

router.post('/', controller.insert);
/*insert fields validating fields*/
router.post('/insertValidate', controller.insertValidate);

router.delete('/:id', controller.remove);



router.put('/:id', controller.update);

export {router};


