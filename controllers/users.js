const User = require('../models/user');

const getCurrentUser = (req, res, next) => {
  const id = req.user._id;

  User.findById(id)
    .then((user) => {
      res.status(200).send(user);
    })
    .catch((err) => {
      res.send(id);
    })
    .catch(next);
};

module.exports = {
  getCurrentUser
};