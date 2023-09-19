const users = [
    {
      username: 'seed user 1',
      email: 'seed1@aol.com'
    },
    {
      username: '  seed user 2   ',
      email: 'seed2@hotmail.com'
    },
    {
      username: 'seed user 3   ',
      email: 'seed3@HOTmail.com'
    }
  ];

const thoughts = [
    {
      thoughtText: 'Cogito ergo sum',
      createdAt: new Date(),
      username: 'seed user 1'
    },
    {
      thoughtText: 'Fiat lux',
      createdAt: new Date(2000, 0, 1, 0, 5, 5),  // Note: 0 = January, per JS convention
      username: 'seed user 2',
    },
    {
      thoughtText: 'Now there\'s a thought!',
      createdAt: new Date(2023, 9, 19, 5, 15, 25),  // NOTE: 9 = October, per JS convention
      username: 'seed user 1'
    },
    {
      thoughtText: 'shh',
      // let default do createdAt
      username: 'seed user 2',
      reactions: [
        {
          reactionBody: 'Ain\'t that somethin\'!',
          username: 'not one of the original seed users'
        },
        {
          reactionBody: 'Another reaction',
          username: 'seed user 3'
        }
      ]
    }
  ];

  module.exports = { users, thoughts }