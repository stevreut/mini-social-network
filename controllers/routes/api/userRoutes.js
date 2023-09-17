const router = require('express').Router();

const {
    createUser,
    getUsers,
    getSingleUser,
    updateUser,
    deleteUser
} = require('../../controllers/userController');

router.route('/').get(getUsers).post(createUser);  // TODO - what about put?

router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

// TODO - default if no match about?

module.exports = router;