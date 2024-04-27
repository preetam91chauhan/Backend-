const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');
const taskSchema = require('./task.model').schema;

const listSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  position: {
    type: Number,
    required: true,
  },
  tasks: [taskSchema],
  created_by: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

// add plugin that converts mongoose to json
listSchema.plugin(toJSON);
listSchema.plugin(paginate);

/**
 * @typedef List
 */
const List = mongoose.model('List', listSchema);

module.exports = List;
