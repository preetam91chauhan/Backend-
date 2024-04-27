const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createTask = {
  body: Joi.object().keys({
    title: Joi.string().required(),
    description: Joi.string(),
    dueDate: Joi.date(),
  }),
};

module.exports = {
  createTask,
};
