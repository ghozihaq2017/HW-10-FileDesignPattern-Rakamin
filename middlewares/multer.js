const multer = require('multer');
const path = require('path');

const diskStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../upload-photo'));
  },
  filename: (req, file, cb) => {
    const generatedFileName = file.fieldname + '-' + Date.now() + path.extname(file.originalname);
    cb(null, generatedFileName);
  },
});

const multerMiddleware = multer({ storage: diskStorage }).single('image');

module.exports = multerMiddleware;
