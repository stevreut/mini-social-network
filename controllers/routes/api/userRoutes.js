const router = require('express').Router();

const {
    createUser,
    getUsers,
    getSingleUser,
    updateUser,
    deleteUser,
    addUserFriend,
    deleteUserFriend
} = require('../../controllers/userController');

router.route('/').get(getUsers).post(createUser);  // TODO - what about put?

router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

router.route('/:userId/friends/:friendId').post(addUserFriend).delete(deleteUserFriend);

// TODO - default if no match about?

module.exports = router;