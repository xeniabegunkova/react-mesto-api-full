const STATUS_CODES = {
  WELL_DONE: 201,
  BAD_REQUEST_ERROR: 400,
  UNAUTHORIZED_ERROR: 401,
  FORBIDDEN_ERROR: 403,
  NOT_FOUND: 404,
  CONFLICT_ERROR: 409,
  SERVER_ERROR: 500,
};

const ALERT_MESSAGE = {
  GET_USER_ERROR: 'Переданы некорректные данные при создании пользователя',
  GET_NOT_FOUND: 'Пользователь по указанному _id не найден.',
  VALIDATION_ERROR: 'Переданы некорректные данные при обновлении профиля.',
  GET_CARDS_ERROR: 'Переданы некорректные данные при создании карточки',
  DELETE_CARDSID_ERROR: 'Карточка с указанным _id не найдена',
  LIKE_CARDID_VALIDATION_ERROR: 'Переданы некорректные данные для постановки/снятии лайка',
  LIKE_CARDIN_NOT_FOUND: 'Передан несуществующий _id карточки',
  SERVER_ERROR: 'Ошибка по умолчанию',
  ID_NOT_FOUND: 'Пользователь с указанным id не найден',
  REFUSAL_TO_DELETE: 'Запрещено удалять карточку другого пользователя',
  NOT_FOUND_ERROR_TEST: 'Не найдено',
  AUTHORIZATION_REQ: 'Необходима авторизация',
  ERROR_AUTHORIZATION: 'Неправильные почта или пароль',
  EXISTING_EMAIL: 'Пользователь с данным email уже существует',
  EXISTING_ID: 'Введен некорректный id',
};

module.exports = {
  STATUS_CODES,
  ALERT_MESSAGE,
};
