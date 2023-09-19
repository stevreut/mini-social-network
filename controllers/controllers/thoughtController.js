const Thought = require('../../models/Thought');
const User = require('../../models/User');

module.exports = {

  async getThoughts(req, res) {
    try {
      const thoughts = await Thought.find()
        .select('-__v');
      res.json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async getSingleThought(req, res) {
    try {
      const thought = await Thought.findOne({ _id: req.params.thoughtId })
        .select('-__v')

      if (!thought) {
        return res.status(404).json({ message: 'No thought with that ID' });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async createThought(req, res) {
    try {
      const username = req.body.username;
      if (!username) {
        res.status(400).json({message: 'attempt to add thought with no username'});
        return;
      }
      let user = await User.findOne({username: username});
      if (!user) {
        res.status(404).json({message: 'attempt to add thought where username not on file'});
        return;
      }
      const dbThoughtData = await Thought.create(req.body);
      const thoughtId = dbThoughtData._id;
      user.thoughts.push(thoughtId);
      user.save();
      res.json(dbThoughtData);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async updateThought(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!thought) {
        return res.status(404).json({ message: 'No thought with this id!' });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async deleteThought(req, res) {
    try {
      const thought = await Thought.findOneAndRemove({ _id: req.params.thoughtId });

      if (!thought) {
        return res.status(404).json({ message: 'No thought with this id!' });
      }
      res.json({ message: 'Thought successfully deleted!' });
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async addReaction(req, res) {
    try {
      let thought = await Thought.findById(req.params.thoughtId);
      if (!thought) {
        res.status(404).json({ message: 'no thought found for id' });
        return;
      }
      thought.reactions.push(req.body);
      thought.save();
      res.json(thought);  // TODO is thought the thing to return here? (check sample screens)
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async deleteReaction(req, res) {
    try {
      let thought = await Thought.findById(req.params.thoughtId);
      if (!thought) {
        res.status(404).json({ message: 'no thought found for id' });
        return;
      }
      let i = 0;
      let matched = false;
      while (i<thought.reactions.length) {
        if (thought.reactions[i]._id == req.params.reactionId) {
          matched = true;
          thought.reactions.splice(i, 1);
        } else {
          i++;
        }
      }
      if (matched) {
        thought.save();
        res.json({message: 'reaction deleted'});
      } else {
        res.status(404).json({message: 'no reaction found for reactionId'});
      }
    } catch (err) {
      res.status(500).json(err);
    }
  }

};
