const invalidData = new Error('invalidData');
const emailAreadyExists = new Error('emailAreadyExists');
const emptyField = new Error('emptyField');
const errorData = new Error('errorData');

const REGEX_VALID_EMAIL = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function isValidUser({ name, email, password }) {
  if (!password || !email) throw invalidData;
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

function isValidPAssword(password , ReqPassword) {
  if (password !== ReqPassword) throw errorData;
}

module.exports = {
  isValidUser,
  isUniqueEmail,
  isValidLogin,
  isValidPAssword,
};
