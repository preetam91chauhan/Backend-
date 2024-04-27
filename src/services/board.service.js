const httpStatus = require('http-status');
const { Board } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a user
 * @param {Object} boardBody
 * @returns {Promise<Board>}
 */
const createBoard = async (boardBody) => {
  // restrict user with same board name;
  /*   if (await Board.isNameTaken(boardBody.email)) {  
    throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
  } */
  debugger;
  return Board.create(boardBody);
};

module.exports = {
  createBoard,
};
