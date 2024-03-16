require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;
const router = require('./routes');
const errorHandler = require('./middlewares/errorHandler.js');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Movies App listening on port ${port}`);
});
