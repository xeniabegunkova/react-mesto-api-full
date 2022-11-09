const { STATUS_CODES } = require('../utils/constants');

class ForbiddenError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = STATUS_CODES.FORBIDDEN_ERROR;
  }
}

module.exports = ForbiddenError;
