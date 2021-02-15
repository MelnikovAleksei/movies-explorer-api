const router = require('express').Router();

const userRouter = require('./users');
const movieRouter = require('./movies');

const NotFoundError = require('../errors/NotFoundError');

const {
  NOT_FOUND_ERROR_MESSAGE,
} = require('../utils/constants');

router.use(userRouter);
router.use(movieRouter);

router.all('*', () => {
  throw new NotFoundError(NOT_FOUND_ERROR_MESSAGE);
})

module.exports = router;