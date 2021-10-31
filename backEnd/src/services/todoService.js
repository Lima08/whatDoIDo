const model = require('../models/todoModel');
const valid = require('../validations/validTodo');

async function addTodo({ title, date, description, userId, role }) {
  const todo = await model.addTodo(title, date, description, userId, role);
  const { insertedId } = todo;

  return { title, date, description, userId, role, todoId: insertedId };
}

async function getAllTodo() {
  return model.getAllTodo();
}

// async function getTodoByID(id) {
//   const todo = await model.getTodoByID(id);
//   valid.isExistentTodo(todo);

//   return todo;
// }

// async function updatetodoById(editedtodo, userIdJWT, todoId, role) {
//   const oldtodo = await getTodoByID(todoId);

//   valid.isTodoOwner(oldtodo.userId, userIdJWT, role);
//   const todo = await model.updatetodoById(editedtodo, todoId, userIdJWT);

//   return todo;
// }

async function excludeTodoById(id, data) {
  const dBTodo = await model.getTodoByID(id);
  console.log('dBTodo------------', dBTodo)
  valid.isExistentTodo(dBTodo);

  const { _id: userIdJWT, role } = data;

  valid.isTodoOwner(dBTodo.userId, userIdJWT, role);
  const todo = await model.excludeTodoById(id);

  return todo;
}

module.exports = {
  addTodo,
  getAllTodo,
  // updatetodoById,
  excludeTodoById,
};
