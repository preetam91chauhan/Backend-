const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { taskService } = require('../services');

const createTask = catchAsync(async (req, res) => {
  const task= await taskService.createTask(req.body);
  res.status(httpStatus.CREATED).send(task);
});



module.exports = {
  createTask,
};
