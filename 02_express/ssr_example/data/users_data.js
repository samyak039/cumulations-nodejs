const User = require('../models/user_model');

const users = [
  new User('Divya', '010deepti@gmail.com', '1994/12/10'),
  new User('Samyak', 'samyak039@proton.me', '1999/11/30'),
  new User('Manan', 'mananoswal2@gmail.com', '2004/11/13'),
];

// { name: 'Divya', email: '010deepti@gmail.com', age: 28 },

module.exports = users;
