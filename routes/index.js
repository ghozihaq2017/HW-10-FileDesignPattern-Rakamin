const express = require('express');
const router = express.Router();
const movieRouter = require('./movieRoute.js');
const userRouter = require('./userRoute.js');
const path = require('path');

router.use('/photos/', express.static(path.join(__dirname, '../upload-photo')));
router.use('/movies', movieRouter);
router.use('/users', userRouter);

module.exports = router;
