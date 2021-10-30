module.exports = {
  invalidData: {
    status: 400,
    message: 'Invalid entries. Try again.',
  },
  emptyField: {
    message: 'All fields must be filled',
    status: 401,
  },
  invalidJWT: {
    message: 'jwt malformed',
    status: 401,
  },
  missingToken: {
    message: 'missing auth token',
    status: 401,
  },
  errorData: {
    message: 'Incorrect username or password',
    status: 401,
  },
  emailAreadyExists: {
    message: 'Email already registered',
    status: 409,
  },
  default: {
    status: 500,
    message: 'Internal error.',
  },
};