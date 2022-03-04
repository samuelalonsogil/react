import express from "express";
let router = express.Router();
import * as controller from '../controller/user.js';

router.get('/',  controller.getAll);
router.get('/:id', controller.getById);
router.post('/register', controller.register);

/*insert scores in user*/
/*http://localhost:5300/user/id/insertScores*/
router.post('/:id/insertScores', controller.insertScore);

/*showScores user by id*/
router.get('/:id/showScoresById', controller.showScoresById);

router.post('/login', controller.loginUser);
router.delete('/:id', controller.remove);
router.put('/:id', controller.update);
router.put('/:id', controller.update);

export { router };