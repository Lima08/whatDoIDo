const service = require('../services/userService');

async function newUser(req, res, _next) {
  const { name, email, password, role = 'user' } = req.body;
  const user = await service.newUser(name, email, password, role);
  return res.status(201).json({ user });
}

module.exports = {
  newUser,
};
