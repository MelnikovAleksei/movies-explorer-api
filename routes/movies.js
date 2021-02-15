const movieRouter = require('express').Router();

const {
  validateId,
  validateCreateMovie,
} = require('../middlewares/requestValidation');

const {
  getMovies,
  createMovie,
} = require('../controllers/movies');

movieRouter.get('/movies', getMovies);
movieRouter.post('/movies', validateCreateMovie, createMovie);

module.exports = movieRouter;