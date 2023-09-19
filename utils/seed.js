const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { users, thoughts } = require('./seed-data');

connection.on('error (logged from seed.js)', (err) => err);

connection.once('open', async () => {
  console.log('connected (logged from seed.js)');

  // Delete the collections if they exist:

  // ... users collection
  let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
  if (userCheck.length) {
    await connection.dropCollection('users');
    console.log('users dropped by seed.js');
    let userCheck = connection.db.listCollections({ name: 'users' }).toArray();
    console.log('users count after drop = ' + userCheck.length);
  } else {
    console.log('no users to drop');
  }

  // ... thoughts collection
  let thoughtCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
  if (thoughtCheck.length) {
    await connection.dropCollection('thoughts');
    console.log('thoughts dropped by seed.js');
    let thoughtCheck = connection.db.listCollections({ name: 'thoughts' }).toArray();
    console.log('thoughts count after drop = ' + thoughtCheck.length);
  } else {
    console.log('no thoughts to drop');
  }

  try {
    await User.insertMany(users);
    console.log('user seed insert successful');
  } catch (err) {
    console.log('err on user seed = ', err.message);
    console.log('\nSTOPPING!\n\n');
    process.exit(0);
  }

  console.table(users);

  const oneUser = await User.findOne({ username: 'seed user 2' });
  const oneUserId = oneUser._id;

  let firstUser = await User.findOne({ username: 'seed user 1' });
  firstUser.friends[0] = oneUserId
  firstUser.save();

  try {
    await Thought.insertMany(thoughts);
  } catch (err) {
    console.log('seed error on thought inserts = ', err.message);
    console.log('\nSTOPPING!\n\n');
    process.exit(0);
  }

  console.table(thoughts);

  console.info('\n\n   *** Seeding complete! ***\n\n');
  process.exit(0);
});
