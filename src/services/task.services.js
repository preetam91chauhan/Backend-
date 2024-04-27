const httpStatus = require('http-status');
const { Task } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a user
 * @param {Object} taskBody
 * @returns {Promise<Task>}
 */
const createTask = async (taskBody) => {
  debugger;
  return Task.create(taskBody);
};

module.exports = {
  createTask,
};
