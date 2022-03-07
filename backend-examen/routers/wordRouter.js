import express from 'express';
let router = express.Router();
import * as controller from '../controller/wordController.js'
import * as verify from '../middleware/verifyToken.js';

router.get('/', controller.getAll);
router.post('/insertWord', controller.insert);

export {router}