const httpStatus = require('http-status');
const { List } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a user
 * @param {Object} listBody
 * @returns {Promise<List>}
 */
const createList = async (listBody) => {
  debugger;
  return List.create(listBody);
};

module.exports = {
  createList,
};
