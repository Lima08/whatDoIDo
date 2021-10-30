const service = require('../services/todoService');

async function addTodo(req, res, _next) {
  console.log('controller todo decoded', req.decoded);
  console.log('controller req.body', req.body);
  const { _id: userId } = req.decoded.data;
  const newtodo = { ...req.body, userId };

  const todo = await service.addTodo(newtodo);

  return res.status(201).json({ todo });
}

// async function getAlltodo(req, res, _next) {
//   const todos = await service.getAlltodo();

//   return res.status(200).json(todos);
// }

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
// async function excludeByIDtodo(req, res, _next) {
//   const { data } = req.decoded;
//   const { id } = req.params;
//   await service.excludeByIDtodo(id, data);

//   return res.status(204).end();
// }

module.exports = {
  addTodo,
  // getAlltodo,
  // updatetodoById,
  // excludeByIDtodo,
};
