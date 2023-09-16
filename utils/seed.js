const connection = require('../config/connection');
const { User, Thought } = require('../models');  // TODO - add other models once defined
// const { getRandomName, getRandomVideos } = require('./data');

connection.on('error (logged from seed.js)', (err) => err);

connection.once('open', async () => {
  console.log('connected (logged from seed.js)');
  // Delete the collections if they exist

  let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
  if (userCheck.length) {
    await connection.dropCollection('users');
  }

  const users = [
    {
      username: 'seed user 1',
      email: 'seed1@aol.com'
    },
    {
      username: 'seed user 2',
      email: 'seed2@hotmail.com'
    }
  ];

  await User.collection.insertMany(users);

  // loop through the saved videos, for each video we need to generate a video response and insert the video responses
  console.table(users);
  
  const thoughts = [
    {
      thoughtText: 'Cogito ergo sum',
      createdAt: new Date(),
      username: 'seed user 1'
    },
    {
      thoughtText: 'Fiat lux',
      createdAt: new Date(2000,1,1,0,5,5),
      username: 'seed user 2'
    }
  ];

  await Thought.collection.insertMany(thoughts);

  // comment
  console.table(thoughts);


  
  console.info('Seeding complete!');
  process.exit(0);
});
