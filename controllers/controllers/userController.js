const { ObjectId } = require('mongoose');
const User = require('../../models/User');
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
        .populate('thoughts')
        .populate('friends')

      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async createUser(req, res) {
    try {
      const dbUserData = await User.create(req.body);
      res.json(dbUserData);
    } catch (err) {
      res.status(500).json(err);
    }
  },

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
      res.status(500).json(err);
    }
  },

  async deleteUser(req, res) {
    try {
      const user = await User.findOneAndRemove({ _id: req.params.userId });
      if (!user) {
        return res.status(404).json({ message: 'No user with this id!' });
      }
      await Thought.deleteMany({ _id: { $in: user.thoughts }});
      res.json({ message: 'User and associated thoughts successfully deleted!' });
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async addUserFriend(req, res) {
    try {
      const user = await User.findById(req.params.userId);
      if (!user) {
        return res.status(404).json({ message: 'No user with this id!' });
      }

      user.friends.push(req.params.friendId);
      user.save();
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async deleteUserFriend(req, res) {
    try {
      const user = await User.findById(req.params.userId);
      if (!user) {
        return res.status(404).json({ message: 'No user with this id!' });
      }
      let matchFound = false;  // TODO - document this code
      if (user.friends.length) {
        let i = 0;
        while (i < user.friends.length) {
          if (user.friends[i] == req.params.friendId) {  // Deliberate ==, not ===
            matchFound = true;
            user.friends.splice(i,1);
            // If match then do not advance i, as the array will now be shorted by
            // splice and the SAME position may have ANOTHER matched.
          } else {
            i++;
          }
        }
      }
      if (!matchFound) {
        res.status(404).json({message: "friend ID not matched for user"});
      } else {
        user.save();
        res.json(user);
      }
    } catch (err) {
      res.status(500).json(err);
    }
  }

};
