require('dotenv').config();

const model = require('../models/userModel');
const JWT = require('jsonwebtoken');
const { isUniqueEmail, isValidPAssword } = require('../validations/validUser');

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
  console.log('serves,', user)

  const { name, role, _id } = user;
  isValidPAssword(password, user.password);
  console.log('passou isValidPAssword');

  const token = JWT.sign(
    { data: { _id, name, email, role } },
    process.env.SECRET,
    jwtConfig
  );
  console.log('passou token', token);

  return token;
}

module.exports = {
  newUser,
  login,
};
