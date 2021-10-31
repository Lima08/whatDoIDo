const invalidData = new Error('invalidData');
const { isValidUser, isValidLogin } = require('../validations/validUser');

function newUserValidation(req, _res, next) {
  const { body } = req;
  isValidUser(body);

  next();
}

function loginValidation(req, _res, next) {
  const { body } = req;
  isValidLogin(body);

  next();
}

function nameValidation(req, _res, next) {
  const { name } = req.body;

  if (!name || name.length < 3) throw invalidData;

  next();
}

module.exports = {
  newUserValidation,
  loginValidation,
  nameValidation,
};
