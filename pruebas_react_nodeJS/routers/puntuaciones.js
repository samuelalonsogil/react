import express from 'express';
let router = express.Router();
import * as controller from '../controller/puntuacion.js'

router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.post('/', controller.insert);
router.delete('/:id', controller.remove);
router.put('/:id', controller.update);

module.exports = router;


