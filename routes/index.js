const express = require('express');
const router = express.Router();
const movieRouter = require('./movieRoute.js');
const path = require('path');

router.use('/photos/', express.static(path.join(__dirname, '../upload-photo')));
router.use('/movies', movieRouter);

module.exports = router;
