// const { ObjectId } = require('bson');  // TODO - did this auto-populate?  Do I need it?
const { Types } = require('mongoose');
// TODO - answer to the above:  This seems to have been auto-inserted as a result of the
//   declaration "reactionId: ObjectId".  This, however, is a temporary place-holder
//   declaration, so we should try commenting out line 1 above (and ultimately removing it)
//   once the definition of reactionId is complete.
const { Schema, model } = require('mongoose');

// Used by two schemas - reactionSchema and thoughtSchema
function getCreatedAt (date) {
    // TODO - console logging is temporary, but maintain return
    console.log('thought getter executed');
    // const formattedDate = date.toLocaleString();
    formattedDate = new Date(2023,5,5,5,5,5);
    console.log('reaction locale Date = ', formattedDate);
    return formattedDate;
};



const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            maxLength: 280,
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: getCreatedAt
            // TODO - needs "getter"
        }
    }, 
    { 
        toJSON: { getters: true } 
    }
);

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280,
        },    
        createdAt: {
            type: Date,
            default: Date.now,
            get: getCreatedAt
        },    
        username: {
            type: String,
            required: true,
        },
        reactions: [reactionSchema]
    },
    { 
        toJSON: { getters: true } 
    }

);

// thoughtSchema.methods.getCreatedAt = function () {
//     // TODO - console logging is temporary, but maintain return
//     const formattedDate = this.createdAt.toLocaleString();
//     console.log('thought locale Date = ', formattedDate);
//     return formattedDate;
// };


// Initialize our User model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;




// **Thought**:

// * `thoughtText`
//   * String
//   * Required
//   * Must be between 1 and 280 characters

// * `createdAt`
//   * Date
//   * Set default value to the current timestamp
//   * Use a getter method to format the timestamp on query

// * `username` (The user that created this thought)
//   * String
//   * Required

// * `reactions` (These are like replies)
//   * Array of nested documents created with the `reactionSchema`

// **Schema Settings**:

// Create a virtual called `reactionCount` that retrieves the length of the thought's `reactions` array field on query.

// ---



// S.R. - 9/16 4:54 p.m. - unclear to me if the following should be a model - must research



// **Reaction** (SCHEMA ONLY)

// * `reactionId`
//   * Use Mongoose's ObjectId data type
//   * Default value is set to a new ObjectId

// * `reactionBody`
//   * String
//   * Required
//   * 280 character maximum

// * `username`
//   * String
//   * Required

// * `createdAt`
//   * Date
//   * Set default value to the current timestamp
//   * Use a getter method to format the timestamp on query

// **Schema Settings**:

// This will not be a model, but rather will be used as the `reaction` field's subdocument schema in the `Thought` model.
