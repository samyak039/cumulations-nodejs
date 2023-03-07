const express = require('express');
const {
  getUser,
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} = require('../../controller/user_controller');

const router = express.Router();

router.route('/').get(getUsers).post(createUser);
router.route('/:id').get(getUser).put(updateUser).delete(deleteUser);

module.exports = router;
