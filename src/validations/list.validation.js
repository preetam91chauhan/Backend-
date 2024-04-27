const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createList = {
  body: Joi.object().keys({
    title: Joi.string().required(),
    position: Joi.string(),
    tasks: Joi.array(),
  }),
};

module.exports = {
  createList,
};
