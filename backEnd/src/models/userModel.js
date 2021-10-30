const connection = require('../connections/mongoConnection');

async function newUser(name, email, password, role) {
  return connection()
    .then((db) =>
      db.collection('users').insertOne({ name, email, password, role })
    )
    .then((response) => response)
    .catch(() => null);
}

async function login(email) {
  return connection()
    .then((db) => db.collection('users').findOne({email}))
    .then((response) => response) 
    .catch(() => null);
}

module.exports = {
  newUser,
  login,
};
