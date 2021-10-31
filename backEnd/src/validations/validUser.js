const invalidData = new Error('invalidData');
const emailAreadyExists = new Error('emailAreadyExists');
const emptyField = new Error('emptyField');
const errorData = new Error('errorData');
const notFound = new Error('notFound');

const REGEX_VALID_EMAIL = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function isValidUser({ email, password }) {
  if (!password || !email) throw emptyField;
  if (!REGEX_VALID_EMAIL.test(email)) throw invalidData;
  if (password.length < 6) throw invalidData;
}

function isUniqueEmail(user) {
  if (user && user.email) throw emailAreadyExists;
}

function isValidLogin({ email, password }) {
  if (!email || !password) throw emptyField;
  if (!REGEX_VALID_EMAIL.test(email)) throw errorData;
}

function isExistentUser(user) {
  if (!user || !user.name) throw notFound;
}

function isValidPassword(password , ReqPassword) {
  if (password !== ReqPassword) throw errorData;
}

module.exports = {
  isValidUser,
  isUniqueEmail,
  isValidLogin,
  isValidPassword,
  isExistentUser,
};
