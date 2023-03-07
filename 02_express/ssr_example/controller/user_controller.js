const User = require('../models/user_model');
const users = require('../data/users_data');

const getUsers = (req, res) => {
  return res.status(200).json({ success: true, data: users });
};

const getUser = (req, res) => {
  const { id } = req.params;

  const user = users.find((user) => user.id === Number(id));
  if (!user) {
    return res
      .status(400)
      .json({ success: false, msg: `no user with id: ${id}` });
  }

  return res.status(200).json({ success: true, data: user });
};

const createUser = (req, res) => {
  const { name, email, age } = req.body;

  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: 'please provide "name" value' });
  }
  if (!email) {
    return res
      .status(400)
      .json({ success: false, msg: 'please provide "email" value' });
  }
  if (!age) {
    return res
      .status(400)
      .json({ success: false, msg: 'please provide "age" value' });
  }

  const newUsers = users.push(User(name, email, age));

  return res.status(201).json({ success: true, data: newUsers });
};

const updateUser = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const user = users.find((user) => user.id === Number(id));
  if (!user) {
    return res
      .status(400)
      .json({ success: false, msg: `no user with id: ${id}` });
  }

  const newUsers = users.map((user) => {
    if (user.id === Number(id)) {
      user.name = name;
    }
    return user;
  });
  return res.status(200).json({ success: true, data: newUsers });
};

const deleteUser = (req, res) => {
  const { id } = req.params;

  const user = users.find((user) => user.id === Number(id));
  if (!user) {
    return res
      .status(400)
      .json({ success: false, msg: `no user with id: ${id}` });
  }

  const newUsers = users.filter((person) => person.id !== Number(id));
  return res.status(200).json({ success: true, data: newUsers });
};

module.exports = { getUser, getUsers, createUser, updateUser, deleteUser };
