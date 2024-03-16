const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController.js');
const multer = require('../middlewares/multer.js');

// GET ALL MOVIES
router.get('/', movieController.findAll);

// GET MOVIES DETAIL
router.get('/:id', movieController.findOne);

// ADD NEW MOVIE
router.post('/', movieController.create);

// UPLOAD PHOTO
router.post('/uploads', multer, movieController.uploads);

// UPDATE MOVIE BY ID
router.put('/:id', movieController.update);

// DELETE MOVIE BY ID
router.delete('/:id', movieController.destroy);

module.exports = router;
