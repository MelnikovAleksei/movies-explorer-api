const mongoose = require('mongoose');
const isURL = require('validator/lib/isURL');

const movieSchema = new mongoose.Schema({
  country: {
    type: String,
    required: [true, 'Поле-строка "country - страна" является обязательным'],
  },
  director: {
    type: String,
    required: [true, 'Поле-строка "director - режиссёр" является обязательным'],
  },
  year: {
    type: String,
    required: [true, 'Поле-строка "year - год" является обязательным'],
  },
  description: {
    type: String,
    required: [true, 'Поле-строка "description - описание" является обязательным'],
  },
  nameRU: {
    type: String,
    required: [true, 'Поле-строка "nameRU - название фильма на русском языке" является обязательным'],
  },
  nameEN: {
    type: String,
    required: [true, 'Поле-строка "nameEN - название фильма на английском языке" является обязательным'],
  },
  image: {
    type: String,
    required: [true, 'Поле-строка "image - ссылка на постер к фильму" является обязательным'],
    validate: {
      validator (v) {
        return isURL(v);
      },
      message: (props) => `${props.value} не является URL адресом для постера к фильму`,
    },
  },
  trailer: {
    type: String,
    required: [true, 'Поле-строка "trailer - ссылка на трейлер фильма" является обязательным'],
    validate: {
      validator (v) {
        return isURL(v);
      },
      message: (props) => `${props.value} не является URL адресом для трейлера к фильму`,
    },
  },
  thumbnail: {
    type: String,
    required: [true, 'Поле-строка "thumbnail - миниатюрное изображение постера к фильму" является обязательным'],
    validate: {
      validator (v) {
        return isURL(v);
      },
      message: (props) => `${props.value} не является URL адресом для миниатюрного изображения постера к фильму`,
    },
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: [true, 'Поле-строка "owner - _id пользователя, который сохранил статью" является обязательным'],
  },
  movieId: {
    type: Number,
    unique: true,
    required: [true, 'Поле-строка "movieId - id фильма, который содержится в ответе сервиса MoviesExplorer" является обязательным'],
  },
});

module.exports = mongoose.model('movie', movieSchema);