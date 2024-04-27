const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const taskValidation = require('../../validations/task.validation');
const taskController = require('../../controllers/task.controller');

const router = express.Router();

//complete swagger funtionality;
router.route('/').post(auth(), validate(taskValidation.createTask), taskController.createTask);

module.exports = router;
