const express = require('express');

const router = express.Router();
const rescue = require('express-rescue');
const validateJWT = require('../middlewares/validateJWT');
const controller = require('../controllers/todoController');

router
  .post('/todo', rescue(validateJWT), rescue(controller.addTodo))
  .get('/todos', rescue(controller.getAllTodo))
// .get('/todos/:id', rescue(controller.getByIDtodo))
// .put(
//   '/todos/:id',
//   rescue(todoValidation),
//   rescue(validateJWT),
//   rescue(controller.updatetodoById),
// )
.delete(
  '/todo/:id',
  rescue(validateJWT),
  rescue(controller.excludeTodoById),
);

module.exports = router;
