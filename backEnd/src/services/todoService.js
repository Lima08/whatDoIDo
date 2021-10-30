const model = require('../models/todoModel');
// const valid = require('../validations/validtodo');

async function addTodo({ title, date, description, userId, role }) {
  const todo = await model.addTodo({ title, date, description, userId, role });
  console.log( 'model resposta todo', todo)
  const { insertedId } = todo;

  return { title, date, description, userId, role, todoId: insertedId };
}

async function getAllTodo() {
  return model.getAllTodo();
}

// async function getByIDtodo(id) {
//   const todo = await model.getByIDtodo(id);
//   valid.isExistenttodo(todo);

//   return todo;
// }

// async function updatetodoById(editedtodo, userIdJWT, todoId, role) {
//   const oldtodo = await getByIDtodo(todoId);
  
//   valid.istodoOwner(oldtodo.userId, userIdJWT, role);
//   const todo = await model.updatetodoById(editedtodo, todoId, userIdJWT);
  
//   return todo;
// }

// async function excludeByIDtodo(id, { _id: userIdJWT, role }) {
//   const dbtodo = await getByIDtodo(id);

//   valid.istodoOwner(dbtodo.userId, userIdJWT, role);
//   const todo = await model.excludeByIDtodo(id);

//   return todo;
// }

module.exports = {
  addTodo,
  getAllTodo,
  // updatetodoById,
  // excludeByIDtodo,
};
