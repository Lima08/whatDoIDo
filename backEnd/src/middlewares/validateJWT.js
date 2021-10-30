require('dotenv').config();

const jwt = require('jsonwebtoken');

const invalidJWT = new Error('invalidJWT');
const missingToken = new Error('missingToken');

function validateJWT(req, _res, next) {
  const { authorization } = req.headers;
  
  if (!authorization) throw missingToken;
  
  try {
    const token = jwt.verify(authorization, process.env.SECRET);
    console.log('token', token)
    req.decoded = token;
    next();
  } catch (e) {
    throw invalidJWT;
  }
}

module.exports = validateJWT;