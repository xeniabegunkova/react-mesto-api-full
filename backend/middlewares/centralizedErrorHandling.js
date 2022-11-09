const { STATUS_CODES, ALERT_MESSAGE } = require('../utils/constants');

module.exports = ((err, req, res, next) => {
  // если у ошибки нет статуса, выставляем 500
  const { statusCode = STATUS_CODES.SERVER_ERROR, message } = err;

  res
    .status(statusCode)
    .send({
      // проверяем статус и выставляем сообщение в зависимости от него
      message: statusCode === STATUS_CODES.SERVER_ERROR
        ? ALERT_MESSAGE.SERVER_ERROR
        : message,
    });

  next();
});
