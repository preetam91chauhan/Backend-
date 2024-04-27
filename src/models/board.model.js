const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');
const listSchema = require('./list.model').schema;

const boardSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: String,
  lists: [listSchema],
  created_by: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

/*    members: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }], */

// add plugin that converts mongoose to json
boardSchema.plugin(toJSON);
boardSchema.plugin(paginate);

/**
 * @typedef Board
 */
const Board = mongoose.model('Board', boardSchema);

module.exports = Board;
