const express = require('express');

const router = express.Router();
const rescue = require('express-rescue');
const validateJWT = require('../middlewares/validateJWT');
const controller = require('../controllers/todoController');

router
  .post(
    '/todo',
    rescue(validateJWT),
    rescue(controller.addTodo),
  );
  // .get('/todos/:id', rescue(controller.getByIDtodo))
  // .get('/todos', rescue(controller.getAlltodo))
  // .put(
  //   '/todos/:id',
  //   rescue(todoValidation),
  //   rescue(validateJWT),
  //   rescue(controller.updatetodoById),
  // )
  // .delete(
  //   '/todos/:id',
  //   rescue(validateJWT),
  //   rescue(controller.excludeByIDtodo),
  // );

module.exports = router;

