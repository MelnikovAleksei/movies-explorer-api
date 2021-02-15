require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const bodyParser = require('body-parser');

const {
  MONGO_DB_ADDRESS,
  PORT_NUMBER,
  ALLOWED_CORS,
} = require('./utils/constants');

const { errors } = require('celebrate');

const rateLimiter = require('./middlewares/rateLimit');

const helmet = require('helmet');

const { requestLogger, errorLogger } = require('./middlewares/logger');

const errorHandler = require('./middlewares/errorHandler');

const cors = require('cors');

const router = require('./routes/index');

const app = express();

app.use(cors({
  origin: ALLOWED_CORS,
}));

const { PORT = PORT_NUMBER } = process.env;

mongoose.connect(MONGO_DB_ADDRESS, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(requestLogger);

app.use(helmet());

app.use(rateLimiter)

app.use('/', router);

app.use(errorLogger);

app.use(errors());

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`); /* eslint-disable-line no-console */
});
