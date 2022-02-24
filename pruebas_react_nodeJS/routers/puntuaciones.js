import express from 'express';
let router = express.Router();
let controller = require('../controller/puntuacion');

router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.post('/', controller.insert);
router.delete('/:id', controller.remove);
router.put('/:id', controller.update);

module.exports = router;


