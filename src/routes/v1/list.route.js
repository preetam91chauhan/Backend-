const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const listValidation = require('../../validations/list.validation');
const listController = require('../../controllers/list.controller');

const router = express.Router();

router.route('/').post(auth(), validate(listValidation.createList), listController.createList);

module.exports = router;
