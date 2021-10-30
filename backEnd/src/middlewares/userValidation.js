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

module.exports = {
  newUserValidation,
  loginValidation,
};
