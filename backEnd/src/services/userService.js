const model = require('../models/userModel');

async function newUser(name, email, password, role) {
  // checar se ja não existe usuario com o mesmo email.

  const user = await model.newUser(name, email, password, role);
const { insertedId } = user;
  return {insertedId, name, email, role};
}

module.exports = {
  newUser,
};
