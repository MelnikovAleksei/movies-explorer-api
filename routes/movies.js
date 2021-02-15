const movieRouter = require('express').Router();

const {
  validateId,
  validateCreateMovie,
  validateDeleteMovie,
} = require('../middlewares/requestValidation');

const {
  getMovies,
  createMovie,
  deleteMovie,
} = require('../controllers/movies');

movieRouter.get('/movies', validateId, getMovies);
movieRouter.post('/movies', validateCreateMovie,createMovie);
movieRouter.delete('/movies/:movieId', validateDeleteMovie, deleteMovie);

module.exports = movieRouter;