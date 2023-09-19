const dayjs = require('dayjs');
const { Types } = require('mongoose');
const { Schema, model } = require('mongoose');  // TODO - what is "model" here?  Is it needed?

// Used by two schemas - reactionSchema and thoughtSchema for getters
function getCreatedAt (date) {
    formattedDate = dayjs(date).format('MMM D, YYYY') + ' at ' + dayjs(date).format('h:mm a');
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

const Thought = model('thought', thoughtSchema);

module.exports = Thought;