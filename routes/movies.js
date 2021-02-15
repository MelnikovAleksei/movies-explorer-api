const movieRouter = require('express').Router();

const {
  validateId,
} = require('../middlewares/requestValidation');

const {
  getMovies,
} = require('../controllers/movies');

movieRouter.get('/movies', validateId, getMovies);

module.exports = movieRouter;