# Movies Explorer API

## Описание

REST API для аутентификации пользователей и сохранения фильмов в избранном. Создан для сервиса поиска фильмов **Movie Explorer**, в котором можно найти фильмы по ключевым словам.

**адрес домена сервера:**

`https://api.cinema-explorer.students.nomoredomains.icu/`

## Схемы и модели ресурсов API

### Поля схемы `user`:

Поле | Описание
-----|------------
email | Почта пользователя, по которой он регистрируется. Обязательное поле, уникальное для каждого пользователя. Валидируется на соответствие схеме элекстронной почты.
password | Хеш пароля. Обязательное поле-строка. База данных не возвращает это поле.
name | Имя пользователя. Обязательное поле-строка от 2 до 30 символов.

### Поля схемы `movie`:

Поле | Описание
-----|------------
country | Страна создания фильма. Обязательное поле-строка.
director | Режиссёр фильма. Обязательное поле-строка.
duration | Длительность фильма. Обязательное поле-число.
year | Год выпуска фильма. Обязательное поле-строка.
description | Описание фильма. Обязательное поле-строка.
image | Cсылка на постер к фильму. Обязательное поле-строка. URL-адрес.
trailer | Cсылка на трейлер фильма. Обязательное поле-строка. URL-адрес.
thumbnail | Миниатюрное изображение постера к фильму. Обязательное поле-строка. URL-адрес.
owner | **_id** пользователя, который сохранил статью. Обязательное поле.
movieId | **id** фильма, который содержится в ответе сервиса **MoviesExplorer**. Обязательное поле.
nameRU | Название фильма на русском языке. Обязательное поле-строка.
nameEN | Название фильма на английском языке. Обязательное поле-строка.

## Методы и роуты

Метод | Роут | Описание
----- |------|---------
GET | `/users/me` | возвращает **email** и **имя**
PUT | `/users/me` | обновляет информацию о пользователе с переданными в `body` **email** и **имя**
POST | `/movies` | создаёт фильм с передаными в `body` **country**, **director**, **duration**, **year**, **description**, **image*, **trailer**, **nameRU**, **nameEN**, **movieId** и **thumbnail**
GET | `/movies` | возвращает все сохранённые пользователем фильмы
DELETE | `/movies/movieId` | удаляет сохранённый фильм по его **_id**
POST | `/signup` | создает пользователя с передаными в `body` **email**, **password**, **name**
POST | `/signin` | проверяет переданные в `body` **email** и **password** и возвращает **JWT**

## Примеры

GET https://api.cinema-explorer.students.nomoredomains.icu/users/me

```javascript
{
    "_id": "602cc38b9212b3111aeb0f26",
    "email": "penny@yandex.ru",
    "name": "Penny the Spaniel",
    "__v": 0
}
```

PUT https://api.cinema-explorer.students.nomoredomains.icu/users/me

```javascript
{
    "_id": "602cc38b9212b3111aeb0f26",
    "email": "penny.spaniel@yandex.ru",
    "name": "Duck3000",
    "__v": 0
}
```

POST https://api.cinema-explorer.students.nomoredomains.icu/movies

```javascript
{
    "data": {
        "_id": "602e091aade2e01d7ec46d56",
        "owner": "602cc38b9212b3111aeb0f26",
        "country": "США",
        "director": "Дуэйн Данэм",
        "duration": 84,
        "year": "1993",
        "description": "Собаки и кошка преодолевают реки и горы в поисках хозяев. История о том, как сближают совместные приключения",
        "nameRU": "Дорога домой",
        "nameEN": "Homeward Bound",
        "image": "https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/d3fe26a7-8626-40ae-a26f-c5729dfaf038/300x450",
        "trailer": "https://youtu.be/B9klOvnMne0",
        "thumbnail": "https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/d3fe26a7-8626-40ae-a26f-c5729dfaf038/300x450",
        "movieId": 123456789,
        "__v": 0
    }
}
```

GET https://api.cinema-explorer.students.nomoredomains.icu/movies

```javascript
[
    {
        "_id": "602e091aade2e01d7ec46d56",
        "owner": "602cc38b9212b3111aeb0f26",
        "country": "США",
        "director": "Дуэйн Данэм",
        "duration": 84,
        "year": "1993",
        "description": "Собаки и кошка преодолевают реки и горы в поисках хозяев. История о том, как сближают совместные приключения",
        "nameRU": "Дорога домой",
        "nameEN": "Homeward Bound",
        "image": "https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/d3fe26a7-8626-40ae-a26f-c5729dfaf038/300x450",
        "trailer": "https://youtu.be/B9klOvnMne0",
        "thumbnail": "https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/d3fe26a7-8626-40ae-a26f-c5729dfaf038/300x450",
        "movieId": 123456789,
        "__v": 0
    },
    {
        "_id": "602e091aade2e01d7ec46d56",
        "owner": "602cc38b9212b3111aeb0f26",
        "country": "США",
        "director": "Дэвид Р. Эллис",
        "duration": 88,
        "year": "1996",
        "description": "Троица говорящих зверей возвращается для нового приключения! Если раньше им приходилось путешествовать по горам и пустыням, то теперь раздражительный пес Ченс, избалованная кошка Сэсси и очаровательный ретривер Шедоу затерялись в бурлящем Сан — Франциско! С целой сворой знакомых дворняг находчивая троица прокладывает путь через городские джунгли домой, к любимой семье",
        "nameRU": "Дорога домой 2",
        "nameEN": "Homeward Bound 2",
        "image": "https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/3a284533-964f-4637-8168-8d84e6a9ae80/300x450",
        "trailer": "https://youtu.be/-HezanGIUT4",
        "thumbnail": "https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/3a284533-964f-4637-8168-8d84e6a9ae80/300x450",
        "movieId": 987654321,
        "__v": 0
    }
]
```

DELETE https://api.cinema-explorer.students.nomoredomains.icu/movies/602e091aade2e01d7ec46d56

```javascript
{
    "data": {
        "_id": "602e091aade2e01d7ec46d56",
        "owner": "602cc38b9212b3111aeb0f26",
        "country": "США",
        "director": "Дуэйн Данэм",
        "duration": 84,
        "year": "1993",
        "description": "Собаки и кошка преодолевают реки и горы в поисках хозяев. История о том, как сближают совместные приключения",
        "nameRU": "Дорога домой",
        "nameEN": "Homeward Bound",
        "image": "https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/d3fe26a7-8626-40ae-a26f-c5729dfaf038/300x450",
        "trailer": "https://youtu.be/B9klOvnMne0",
        "thumbnail": "https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/d3fe26a7-8626-40ae-a26f-c5729dfaf038/300x450",
        "movieId": 123456789,
        "__v": 0
    }
}
```

POST https://api.cinema-explorer.students.nomoredomains.icu/signup

```javascript
{
    "name": "Penny the Spaniel",
    "_id": "602cc38b9212b3111aeb0f26",
    "email": "penny@yandex.ru"
}
```

POST https://api.cinema-explorer.students.nomoredomains.icu/signin

```javascript
{
    "token": "qwJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDJlMGI0MGFkZTJlMDFkN2VjND.kNTciLCJpYXQiOjEwBTM2MzAzjjEsImV4cCI1MTYxNDIzNTEyMX0.ciMALhlsVPuG0SwzY7isi390LjlBNNZ_9bOizCq8HTs"
}
```

## Используемые технологии 

* Expressjs
* nodemon
* MongoDB
* mongoose
* dotenv
* cors
* celebrate
* bcryptjs
* express-rate-limit
* winston
* express-winston
* helmet
* jsonwebtoken
* validator
* eslint

## Чеклист

[Критерии диплома веб-разработка](https://code.s3.yandex.net/web-developer/static/new-program/web-diploma-criteria-2.0/index.html) 
