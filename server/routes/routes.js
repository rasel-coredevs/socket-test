const {Router} = require('express');
const userController = require('../controller/userController');
const { createUser, findUser } = require('../Entities/userEntities');

const router = Router();

router.post('/users',userController(createUser));
router.get('/users',userController(findUser));


module.exports= router;

