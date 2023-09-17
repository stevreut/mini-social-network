const router = require('express').Router();

const {
    createUser,
    getUsers,
    getSingleUser,
    updateUser
} = require('../../controllers/userController');

router.route('/').get(getUsers).post(createUser);  // TODO - what about put?

router.route('/:userId').get(getSingleUser).put(updateUser);

// TODO - default if no match about?

module.exports = router;