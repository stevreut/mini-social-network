const router = require('express').Router();

const {
    createThought,
    getThoughts,
    getSingleThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction
} = require('../../controllers/thoughtController');

router.route('/').get(getThoughts).post(createThought);  // TODO - what about put?

router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

router.route('/:thoughtId/reactions/').post(addReaction)

router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

// TODO...
// router.route('/:userId/friends/:friendId').post(addUserFriend).delete(deleteUserFriend);

// TODO - default if no match about?

module.exports = router;