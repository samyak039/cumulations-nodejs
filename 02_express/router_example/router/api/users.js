const express = require('express');
const {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} = require('../../controller/users');

const router = express.Router();

// // root/
// router.get('/', getUsers);
// router.post('/', createUser);
// // root/:id
// router.put('/:id', updateUser);
// router.delete('/:id', deleteUser);

router.route('/').get(getUsers).post(createUser);
router.route('/:id').put(updateUser).delete(deleteUser);

module.exports = router;
