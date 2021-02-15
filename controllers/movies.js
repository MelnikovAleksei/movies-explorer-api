const Movie = require('../models/movie');

const NotFoundError = require('../errors/NotFoundError')

const getMovies = (req, res, next) => {
  const owner = req.user._id;

  Movie.find({ owner })
    .then((cards) => {
      res.status(200).send(cards);
    })
    .catch((err) => {
      throw new NotFoundError(err.message);
    })
    .catch(next);
}

module.exports = {
  getMovies,
}