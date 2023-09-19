const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        email: {
            type: String,
            unique: true,
            required: true,
            lowercase: true,  // Forcing email addresses to lower-case will enable enforcing of true
                              // uniqueness since, otherwise, emails that differed only in case would
                              // not be prevented from being added.
                              //
            // The regular expression below was borrowed without alteration from Unit 18 ("NoSQL") activity 17 
            // of the Full Stack Boot Camp code exercises without alteration; however, that regex was not
            // used in a "match:" clause in its original context.
            match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/]  // TODO - 2nd parameter required?
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'thought',
            },
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'user'
            }
        ]
    },
    {
        toJSON: {
          virtuals: true,
        },
        id: false,
    }
);

userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
})

const User = model('user', userSchema);

module.exports = User;