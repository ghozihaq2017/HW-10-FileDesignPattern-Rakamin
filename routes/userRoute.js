const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js');

// GET ALL USER
router.get('/', userController.findAll);

// GET USER DETAIL
router.get('/:id', userController.findOne);

// ADD NEW USER
router.post('/', userController.create);

// UPDATE USER BY ID
router.put('/:id', userController.update);

// DELETE USER BY ID
router.delete('/:id', userController.destroy);

module.exports = router;
