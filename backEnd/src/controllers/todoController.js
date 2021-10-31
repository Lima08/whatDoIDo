const service = require('../services/todoService');

async function addTodo(req, res, _next) {
  const { _id: userId } = req.decoded.data;
  const newtodo = { ...req.body, userId };

  const todo = await service.addTodo(newtodo);

  return res.status(201).json({ todo });
}

async function getAllTodo(_req, res, _next) {
  const todos = await service.getAllTodo();

  return res.status(200).json(todos);
}

// async function getByIDtodo(req, res, _next) {
// const { id } = req.params;

//   const todo = await service.getByIDtodo(id);

//   return res.status(200).json(todo);
// }

// async function updatetodoById(req, res, _next) {
//   const { _id: userId, role } = req.decoded.data;
//   const { id: todoId } = req.params;
//   const { body } = req;
//   const todo = await service.updatetodoById(body, userId, todoId, role);

//   return res.status(200).json(todo);
// }
async function excludeTodoById(req, res, _next) {
  const { data } = req.decoded;
  const { id } = req.params;
  await service.excludeTodoById(id, data);
  console.log('controller - fim delete ')
  return res.status(204).end();
}

module.exports = {
  addTodo,
  getAllTodo,
  // updatetodoById,
  excludeTodoById,
};
