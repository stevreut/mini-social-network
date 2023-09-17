// TODO - initially copied almost unaltered from exercise 25
// TODO - annotate accordingly - unless decide blanket reference
// TODO - 25 is sufficient

const User = require('../../models/User');  // TODO - altered from original
const Thought = require('../../models/Thought');

module.exports = {

  async getUsers(req, res) {
    try {
      const users = await User.find()
        .select('-__v');
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId })
        .select('-__v')
        .populate('friends');

      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // create a new user
  //--------------------
  // POST messages should be in the form:
  // {
  //    "username": "<user name>",
  //    "email": "<syntactically valid email address>"
  //    "thoughts": [
  //      "<thought id 1>",
  //      "<thought id 2>",
  //      ...
  //    ]
  //    "friends": [
  //      "<friend user id 1>",
  //      "<friend user id 2>",
  //      ...
  //    ],
  // }
  //
  // Where both the "thoughts" and "friends" attributes and
  // corresponding arrays are optional (and, in most contexts, would
  // not be provided).)
  async createUser(req, res) {
    try {
      const dbUserData = await User.create(req.body);
      res.json(dbUserData);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // create an existing user
  //--------------------
  // PUT messages should be in the form:
  // {
  //    "username": "<user name>",
  //    "email": "<syntactically valid email address>"
  //    "thoughts": [
  //      "<thought id 1>",
  //      "<thought id 2>",
  //      ...
  //    ]
  //    "friends": [
  //      "<friend user id 1>",
  //      "<friend user id 2>",
  //      ...
  //    ],
  // }
  //
  // Where both the "thoughts" and "friends" attributes and
  // corresponding arrays are optional
  //
  // In addition, the _id index of the user document most be 
  // provided as the suffix of the URL.
  async updateUser(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!user) {
        return res.status(404).json({ message: 'No user with this id!' });
      }

      res.json(user);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  async deleteUser(req, res) {
    try {
      const user = await User.findOneAndRemove({ _id: req.params.userId });

      if (!user) {
        return res.status(404).json({ message: 'No user with this id!' });
      }
      console.log('user delete');//TODO
      // "Men in Black" functionality - erase all thoughts for a given user
      const thoughtsDelete = await Thought.deleteMany({ _id: { $in: user.thoughts }});
      console.log('subordinate user thoughts deleted');

      res.json({ message: 'User and associated thoughts successfully deleted!' });
    } catch (err) {
      res.status(500).json(err.message);  // TODO
    }
  },


};
