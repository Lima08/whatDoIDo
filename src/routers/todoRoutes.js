const express = require('express');

const router = express.Router();
const rescue = require('express-rescue');
const validateJWT = require('../middlewares/validateJWT');
const controller = require('../controllers/todoController');

router
  .post('/todo', rescue(validateJWT), rescue(controller.addTodo))
  .get('/todos', rescue(validateJWT), rescue(controller.getAllTodo))
  .put('/todo/:id', rescue(validateJWT), rescue(controller.updateTodoById))
  .delete('/todo/:id', rescue(validateJWT), rescue(controller.excludeTodoById));

module.exports = router;
