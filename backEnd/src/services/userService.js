require('dotenv').config();

const model = require('../models/userModel');
const JWT = require('jsonwebtoken');
const {
  isUniqueEmail,
  isValidPassword,
  isExistentUser,
} = require('../validations/validUser');

async function newUser(name, email, password, role) {
  const isExistentUser = await model.login(email);

  isUniqueEmail(isExistentUser);

  const user = await model.newUser(name, email, password, role);
  const { insertedId } = user;
  return { insertedId, name, email, role };
}

const jwtConfig = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

async function login(email, password) {
  const user = await model.login(email);
  isExistentUser(user);
  isValidPassword(password, user.password);
  const { name, role, _id } = user;

  const token = JWT.sign(
    { data: { _id, name, email, role } },
    process.env.SECRET,
    jwtConfig
  );

  return token;
}

module.exports = {
  newUser,
  login,
};
