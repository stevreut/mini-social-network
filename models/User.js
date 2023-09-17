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
            lowercase: true,  // TODO - annotate this, as well as the line below
            match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/]  // TODO - 2nd parameter required?
        }
            //   `/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/`   - TODO - attribute in README.md - borrowed from Module 17 Challenge
        // thoughts: [thoughtSchema],
        // friends: [friendSchema]  // TODO - unclear if we want a schema here
    }
);

// TODO - also be sure to attribute:  https://stackoverflow.com/questions/18022365/mongoose-validate-email-syntax

// TODO - also attribute: https://www.youtube.com/watch?v=DZBGEVgL2eE

// Initialize our User model
const User = model('user', userSchema);

module.exports = User;


// **User**:

// * `username`
//   * String
//   * Unique
//   * Required
//   * Trimmed

// * `email`
//   * String
//   * Required
//   * Unique
//   * Must match a valid email address (look into Mongoose's matching validation)

// * `thoughts`
//   * Array of `_id` values referencing the `Thought` model

// * `friends`
//   * Array of `_id` values referencing the `User` model (self-reference)

// **Schema Settings**:

// Create a virtual called `friendCount` that retrieves the length of the user's `friends` array field on query.

// ---
