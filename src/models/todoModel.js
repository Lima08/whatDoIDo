const { ObjectId } = require('mongodb');

const connection = require('../connections/mongoConnection');

async function addTodo(title, date, description, userId, status) {
  return connection()
    .then((db) =>
      db.collection('todo').insertOne({
        _id: ObjectId(),
        title,
        date,
        description,
        userId,
        status,
      })
    )
    .then((response) => response)
    .catch(() => null);
}

async function getAllTodo() {
  return connection()
    .then((db) => db.collection('todo').find().toArray())
    .catch(() => null);
}

async function getTodoByID(id) {
  return connection()
    .then((db) => db.collection('todo').findOne({ _id: ObjectId(id) }))
    .catch(() => null);
}

async function updateTodoById(
  { title, date, description, status },
  todoId,
  userIdJWT
) {
  return connection()
    .then((db) =>
      db
        .collection('todo')
        .updateOne(
          { _id: ObjectId(todoId) },
          { $set: { title, date, description, status } }
        )
    )
    .then(() => ({ title, date, description, todoId, userIdJWT, status }))
    .catch(() => null);
}

async function excludeTodoById(id) {
  return connection().then((db) =>
    db.collection('todo').deleteOne({ _id: ObjectId(id) })
  );
}

module.exports = {
  addTodo,
  getAllTodo,
  getTodoByID,
  updateTodoById,
  excludeTodoById,
};
