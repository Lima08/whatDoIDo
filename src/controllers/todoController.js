const service = require('../services/todoService');

async function addTodo(req, res) {
  const { _id: userId } = req.decoded.data;
  const newtodo = { ...req.body, userId };

  const todo = await service.addTodo(newtodo);

  return res.status(201).json({ todo });
}

async function getAllTodo(req, res) {
  const { data } = req.decoded;
  const todos = await service.getAllTodo(data);

  return res.status(200).json(todos);
}

async function updateTodoById(req, res) {
  const { _id: userId, role } = req.decoded.data;
  const { id: todoId } = req.params;
  const { body: editedTodo } = req;
  const todo = await service.updateTodoById(editedTodo, userId, todoId, role);

  return res.status(200).json(todo);
}

async function excludeTodoById(req, res) {
  const { data } = req.decoded;
  const { id } = req.params;
  await service.excludeTodoById(id, data);
  return res.status(204).end();
}

module.exports = {
  addTodo,
  getAllTodo,
  updateTodoById,
  excludeTodoById,
};
