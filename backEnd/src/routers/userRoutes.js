const express = require('express');
const rescue = require('express-rescue');
const controller = require('../controllers/userController');

const { newUserValidation } = require('../middlewares/userValidation');

const router = express.Router();

router.post('/users', rescue(newUserValidation), rescue(controller.newUser));

module.exports = router;
