const mongoose = require('mongoose');
const User = mongoose.model('User');

const STATUS_USER_ERROR = 422;

const newUser = (req, res) => {
  const { username, password } = req.body;
  const user = new User({ username, password });
  user
    .save()
    .then(user => res.json(user)) 
    .catch((err) => {
      res.status(500).json({ err: err.message });
    });
};

const login = (req, res) => {
  const { username, password } = req.body;
  User.findOne({ username })
    .then(user => {
      if (user.password !== password) {
        res.json({ err: 'wrong username or password' });
      }
      if (!user) res.status(404).json({ err: 'user not found'});
      return res.json(user);
    })
    .catch((err) => {
      res.status(500).json({ err: err.message });
    });
}

module.exports = {
  newUser,
  login
};