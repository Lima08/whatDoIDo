const express = require('express');
const rescue = require('express-rescue');
const controller = require('../controllers/userController');

const { newUserValidation, nameValidation } = require('../middlewares/userValidation');

const router = express.Router();

router
  .post('/users', rescue(newUserValidation), rescue(nameValidation), rescue(controller.newUser))
  .post('/login', rescue(newUserValidation), rescue(controller.login));

module.exports = router;
