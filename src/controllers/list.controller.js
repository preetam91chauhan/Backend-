const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { listService } = require('../services');

const createList = catchAsync(async (req, res) => {
  const list = await listService.createList(req.body);
  res.status(httpStatus.CREATED).send(list);
});

module.exports = {
  createList,
};
