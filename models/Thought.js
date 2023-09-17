const { ObjectId } = require('bson');  // TODO - did this auto-populate?  Do I need it?
// TODO - answer to the above:  This seems to have been auto-inserted as a result of the
//   declaration "reactionId: ObjectId".  This, however, is a temporary place-holder
//   declaration, so we should try commenting out line 1 above (and ultimately removing it)
//   once the definition of reactionId is complete.
const { Schema, model } = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId: ObjectId,  // TODO
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
            default: new Date()  // TODO - or ...?
            // TODO - needs "getter"
        }
    }
);

reactionSchema.methods.getCreatedAt = function () {
    // TODO - console logging is temporary, but maintain return
    const formattedDate = this.createdAt.toLocaleString();
    console.log('reaction locale Date = ', formattedDate);
    return formattedDate;
};

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
            default: new Date(),  // TODO - Do we need the more elaborate function notation: () => new Date()  ?
            // TODO - "getter" method to "format" the time/date
        },    
        username: {
            type: String,
            required: true,
        },
        reactions: [reactionSchema]
    }
);

thoughtSchema.methods.getCreatedAt = function () {
    // TODO - console logging is temporary, but maintain return
    const formattedDate = this.createdAt.toLocaleString();
    console.log('thought locale Date = ', formattedDate);
    return formattedDate;
};


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
