const model = require('../models/userModel');
const { isUniqueEmail } = require('../validations/validUser');

async function newUser(name, email, password, role) {
  const isExistentUser = await model.login(email);

  isUniqueEmail(isExistentUser);

  const user = await model.newUser(name, email, password, role);
  const { insertedId } = user;
  return { insertedId, name, email, role };
}

module.exports = {
  newUser,
};
