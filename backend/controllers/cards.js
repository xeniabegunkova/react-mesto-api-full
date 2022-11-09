/* eslint-disable max-len */
const Card = require('../models/card');
const {
  STATUS_CODES,
  ALERT_MESSAGE,
} = require('../utils/constants');
const NotFound = require('../errors/NotFound');
const Forbbiden = require('../errors/Forbidden');
const BadReq = require('../errors/BadRequest');

const createCards = (req, res, next) => {
  const { name, link } = req.body;
  const owner = req.user._id;

  Card.create({ name, link, owner })
    .then((card) => {
      res.status(STATUS_CODES.WELL_DONE).send({ data: card });
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        return next(new BadReq(ALERT_MESSAGE.GET_CARDS_ERROR));
      }
      return next(err);
    });
};

const getCards = (req, res, next) => {
  Card.find({})
    .then((cards) => {
      res.send({ data: cards });
    })
    .catch(next);
};

const deleteCardById = (req, res, next) => {
  Card.findById(req.params.cardId)
    .then((card) => {
      if (!card) {
        throw new NotFound(ALERT_MESSAGE.DELETE_CARDSID_ERROR);
      }
      if (card.owner.toString() !== req.user._id) {
        throw new Forbbiden(ALERT_MESSAGE.REFUSAL_TO_DELETE);
      }
      return Card.findByIdAndRemove(req.params.cardId)
        .then((removedCard) => res.send(removedCard));
    })
    .catch(next);
};

const likeCard = (req, res, next) => Card.findByIdAndUpdate(
  req.params.cardId,
  { $addToSet: { likes: req.user._id } },
  { new: true },
)
  .then((card) => {
    if (!card) {
      throw new NotFound(ALERT_MESSAGE.DELETE_CARDSID_ERROR);
    }
    return res.send({ data: card });
  })
  .catch(next);

const dislikeCard = (req, res, next) => Card.findByIdAndUpdate(
  req.params.cardId,
  { $pull: { likes: req.user._id } },
  { new: true },
)
  .then((card) => {
    if (!card) {
      throw new NotFound(ALERT_MESSAGE.DELETE_CARDSID_ERROR);
    }
    return res.send({ data: card });
  })
  .catch(next);

module.exports = {
  createCards,
  getCards,
  deleteCardById,
  likeCard,
  dislikeCard,
};
