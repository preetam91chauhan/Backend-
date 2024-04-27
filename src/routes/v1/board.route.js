const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const boardValidation = require('../../validations/board.validation');
const boardController = require('../../controllers/board.controller');

const router = express.Router();

//complete swagger funtionality;
router.route('/').post(auth(), validate(boardValidation.createBoard), boardController.createBoard);
//.get(auth('getBoards'), validate(boardValidation.getBoards), boardController.getBoards);

/* router
  .route('/:userId')
  .get(auth('getUsers'), validate(userValidation.getUser), userController.getUser)
  .patch(auth('manageUsers'), validate(userValidation.updateUser), userController.updateUser)
  .delete(auth('manageUsers'), validate(userValidation.deleteUser), userController.deleteUser); */

module.exports = router;
