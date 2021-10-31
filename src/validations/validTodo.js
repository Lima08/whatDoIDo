const notFound = new Error('notFound');
const errorData = new Error('errorData');
const errorOperation = new Error('errorOperation');

function isExistentTodo(todo) {
  if (!todo || !todo.title) throw notFound;
}

function isTodoOwner(todoUserId, userIdJWT, role) {
  if ((todoUserId.toString() !== userIdJWT.toString()) && role !== 'admin') throw errorData;
}

function isOperationSucess(todo) {
  if (!todo || !todo.title) throw errorOperation;
}

module.exports = {
  isExistentTodo,
  isTodoOwner,
  isOperationSucess,
};
