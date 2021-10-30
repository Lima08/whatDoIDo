// const { ObjectId } = require('mongodb');

const connection = require('../connections/mongoConnection');

async function addTodo(newTodo) {
  return connection()
    .then((db) =>
      db
        .collection('todo')
        .insertOne(newTodo)
    )
    .then((response) => response)
    .catch(() => null);
}

// async function getAlltodo() {
//   return connection()
//     .then((db) => db.collection('todo').find().toArray())
//     .catch(() => null);
// }

// async function getByIDtodo(id) {
//   return connection()
//     .then((db) => db.collection('todo').findOne(ObjectId(id)))
//     .catch(() => null);
// }

// async function updatetodoById({ name, ingredients, preparation }, todoId, userId) {
//   return connection()
//     .then((db) =>
//       db
//         .collection('todo')
//         .updateOne(
//           { _id: ObjectId(todoId) },
//           { $set: { name, ingredients, preparation } },
//           ))
//     .then(() => ({ name, ingredients, preparation, _id: todoId, userId }))
//     .catch(() => null);
// }

// async function excludeByIDtodo(id) {
//   return connection()
//     .then((db) => db.collection('todo').deleteOne({ _id: ObjectId(id) }));
// }

module.exports = {
  addTodo,
  // getAlltodo,
  // updatetodoById,
  // excludeByIDtodo,
};
