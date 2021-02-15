const {
  BAD_REQUEST,
  INTERNAL_SERVER_ERROR,
} = require('../utils/constants');

const errorHandler = (err, req, res, next) => {
  const { statusCode = 500, message } = err;
  if (err.kind === 'ObjectId') {
    res.status(400).send({
      message: BAD_REQUEST,
    });
  } else {
    res.status(statusCode).send({
      message: statusCode === 500
        ? INTERNAL_SERVER_ERROR
        : message,
    });
  }
  next();
}

module.exports = errorHandler;