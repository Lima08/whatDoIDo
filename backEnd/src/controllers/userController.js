const service = require('../services/userService');

async function newUser(req, res) {
  const { name, email, password, role = 'user' } = req.body;
  const user = await service.newUser(name, email, password, role);
  return res.status(201).json({ user });
}

async function login(req, res) {
  const { email, password } = req.body;
  const token = await service.login(email, password);
  return res.status(201).json({ token });
}

module.exports = {
  newUser,
  login,
};
