const errorData = new Error('invalidData');
const notFound = new Error('notFound');

// function isValidTodo({ name, ingredients, preparation }) {
//   if (!name || !ingredients || !preparation) throw errorData;
// }

function isExistentTodo(todo) {
  if (!todo || !todo.title) throw notFound;
}

function isTodoOwner(todoUserId, userIdJWT, role) {
  if ((todoUserId.toString() !== userIdJWT.toString()) && role !== 'admin') throw notFound;
}

module.exports = {
  // isValidTodo,
  isExistentTodo,
  isTodoOwner,
};
