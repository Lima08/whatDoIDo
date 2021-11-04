const model = require('../models/todoModel');
const valid = require('../validations/validTodo');

async function addTodo({
  title,
  date,
  description = '',
  userId,
  status = 'pendente',
}) {
  const todo = await model.addTodo(title, date, description, userId, status);
  const { insertedId } = todo;

  return { title, date, description, userId, todoId: insertedId, status };
}

async function getAllTodo(data) {
  const { _id: userIdJWT } = data;
  return model.getAllTodo(userIdJWT);
}

async function updateTodoById(editedTodo, userIdJWT, todoId, role) {
  const DBtodo = await model.getTodoByID(todoId);
  valid.isTodoOwner(DBtodo.userId, userIdJWT, role);

  const { title, date, description, status } = editedTodo;
  const todo = await model.updateTodoById(
    { title, date, description, status },
    todoId,
    userIdJWT
  );

  valid.isOperationSucess(todo)

  return todo;
}

async function excludeTodoById(id, data) {
  const dBTodo = await model.getTodoByID(id);
  valid.isExistentTodo(dBTodo);

  const { _id: userIdJWT, role } = data;
  valid.isTodoOwner(dBTodo.userId, userIdJWT, role);
  const todo = await model.excludeTodoById(id);

  return todo;
}

module.exports = {
  addTodo,
  getAllTodo,
  updateTodoById,
  excludeTodoById,
};
