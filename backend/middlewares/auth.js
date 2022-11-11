const jwt = require('jsonwebtoken');
const { ALERT_MESSAGE } = require('../utils/constants');
const UnauthorizedError = require('../errors/Unauthorized');

const { NODE_ENV, JWT_SECRET } = process.env;

// eslint-disable-next-line consistent-return
module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith('Bearer ')) {
    throw new UnauthorizedError(ALERT_MESSAGE.AUTHORIZATION_REQ);
  }

  const token = authorization.replace('Bearer ', '');
  let payload;

  try {
    payload = jwt.verify(token, NODE_ENV === 'production' ? JWT_SECRET : 'secret-key');
  } catch (err) {
    throw new UnauthorizedError(ALERT_MESSAGE.AUTHORIZATION_REQ);
  }
  req.user = payload;

  next();
};
