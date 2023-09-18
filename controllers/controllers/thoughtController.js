const { ObjectId } = require('mongoose');
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

  // create a new thought
  //--------------------
  // POST messages should be in the form:
  // {
  //    "thoughtText": "<narrative thought content>"
  //    "username": "<user name>",
  //    "createdAt": <Date>
  //    "reactions": [
  //       {
  //         "reactionBody": "<narrative reaction content>",
  //         "username": "<user name of user reacting to though>"
  //       }, ...
  //    ]
  // }
  //
  // Where both the "createAt" and "reactions" attributes and
  // corresponding arrays are optional
  async createThought(req, res) {
    try {
      const username = req.body.username;
      console.log('createThought: username from thought = ', username);
      if (!username) {
        res.status(403).json({message: 'attempt to add thought with no username'});  // TODO - 403?
        return;
      }
      let user = await User.findOne({username: username});
      if (!user) {
        res.status(404).json({message: 'attempt to add thought where username not on file'});
        return;
      }
      console.log('createThought - user OK');
      const dbThoughtData = await Thought.create(req.body);
      console.log('createThought dbThoughtData = "', JSON.stringify(dbThoughtData),'"');
      const thoughtId = dbThoughtData._id;
      console.log('createThought - thoughtId = ', thoughtId);
      user.thoughts.push(thoughtId);
      user.save();
      console.log('createThought - userSaved');
      res.json(dbThoughtData);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // update an existing thought
  //--------------------
  // {
  //    "thoughtText": "<narrative thought content>"
  //    "username": "<user name>",
  //    "createdAt": <Date>
  //    "reactions": [
  //       {
  //         "reactionBody": "<narrative reaction content>",
  //         "username": "<user name of user reacting to though>"
  //       }, ...
  //    ]
  // }
  //
  // Where all attributes are optional but presumably at one would
  // be provided.
  //
  // In addition, the _id index of the thought document must be 
  // provided as the suffix of the URL.
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
      console.log(err);
      res.status(500).json(err);
    }
  },

  async deleteThought(req, res) {
    try {
      const thought = await Thought.findOneAndRemove({ _id: req.params.thoughtId });

      if (!thought) {
        return res.status(404).json({ message: 'No thought with this id!' });
      }
      console.log('thought deleted');//TODO
      res.json({ message: 'Thought successfully deleted!' });
    } catch (err) {
      res.status(500).json(err.message);  // TODO
    }
  },

//   async addUserFriend(req, res) {
//     try {
//       const user = await User.findById(req.params.userId);
//       console.log('user addUserFriend - found for ', req.params.userId);

//       if (!user) {
//         return res.status(404).json({ message: 'No user with this id!' });
//       }

//       user.friends.push(req.params.friendId);
//       console.log('user addUserFriend - friend added to array');
//       user.save();
//       console.log('user saved');

//       res.json(user);
//     } catch (err) {
//       console.log(err);
//       res.status(500).json(err);
//     }

//   },

//   async deleteUserFriend(req, res) {
//     try {
//       console.log('entered deleteUserFriend');
//       const user = await User.findById(req.params.userId);
//       console.log('user deleteUserFriend - found for ', req.params.userId);

//       if (!user) {
//         return res.status(404).json({ message: 'No user with this id!' });
//       }

//       let matchFound = false;
//       if (user.friends.length) {
//         let i = 0;
//         while (i < user.friends.length) {
//           if (user.friends[i] == req.params.friendId) {  // Deliberate ==, not ===
//             matchFound = true;
//             user.friends.splice(i,1);
//             console.log('deleting ' + req.params.friendId + ' at pos ' + i);
//             // If match then do not advance i, as the array will now be shorted by
//             // splice and the SAME position may have ANOTHER matched.
//           } else {
//             i++;
//           }
//         }
//       }
//       if (!matchFound) {
//         res.status(404).json({message: "friend ID not matched for user"});
//       } else {
//         user.save();
//         console.log('user saved');
//         res.json(user);
//       }
//     } catch (err) {
//       console.log(err);
//       res.status(500).json(err);
//     }


//   }


};
