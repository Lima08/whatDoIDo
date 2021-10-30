const connection = require('../connections/mongoConnection');

async function newUser(name, email, password, role) {
  return connection()
    .then((db) => db.collection('users').insertOne({ name, email, password, role }))
    .then((response) => response)
    .catch(() => null);
}

module.exports = {
  newUser,
};
