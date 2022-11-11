// eslint-disable-next-line import/no-unresolved
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const { errors, celebrate, Joi } = require('celebrate');
const cors = require('cors');
const { login, createUser } = require('./controllers/users');
const auth = require('./middlewares/auth');
const NotFound = require('./errors/NotFound');
const { ALERT_MESSAGE } = require('./utils/constants');
const centralizedErrorHandling = require('./middlewares/centralizedErrorHandling');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const { PORT = 3001, MONGO_URL = 'mongodb://localhost:27017/mestodb' } = process.env;

mongoose.connect(MONGO_URL);

const app = express();
app.use(cors({
  exposedHeaders: '*',
}));
app.use(express.json());
app.use(cookieParser());

app.disable('x-powered-by');

app.use(requestLogger);

app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});

app.post('/signin', celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
}), login);

app.post('/signup', celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
    name: Joi.string().min(2).max(30),
    about: Joi.string().min(2).max(30),
    avatar: Joi.string().pattern(/^https?:\/\/(www\.)?[a-zA-Z\d-]+\.[\w\d\-.~:/?#[\]@!$&'()*+,;=]{2,}#?$/),
  }),
}), createUser);

app.get('/signout', (req, res) => {
  res.clearCookie('jwt').send({ message: 'Выход' });
});

app.use(auth);
app.use('/users', require('./routes/users'));
app.use('/cards', require('./routes/cards'));

app.use('*', () => {
  throw new NotFound(ALERT_MESSAGE.NOT_FOUND_ERROR_TEST);
});

app.use(errorLogger);

app.use(errors());

app.use(centralizedErrorHandling);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on ${PORT}`);
});
