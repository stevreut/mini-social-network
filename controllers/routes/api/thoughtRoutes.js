const router = require('express').Router();

const {
    createThought,
    getThoughts,
    getSingleThought,
    updateThought,
    deleteThought
} = require('../../controllers/thoughtController');

router.route('/').get(getThoughts).post(createThought);  // TODO - what about put?

router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

// TODO...
// router.route('/:userId/friends/:friendId').post(addUserFriend).delete(deleteUserFriend);

// TODO - default if no match about?

module.exports = router;