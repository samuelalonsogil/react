import express from 'express';
var router = express.Router();

import * as controller from '../controller/producto.js';
import * as verify from '../middlewares/verifyToken.js';

router.get('/', controller.getAll)
router.get('/:id', controller.getById)
router.post('/', verify.auth, controller.insert)
router.delete('/:id', controller.remove)
router.put('/:id', controller.update)

export { router };
