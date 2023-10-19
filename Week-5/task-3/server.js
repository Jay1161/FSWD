const express = require('express');
const multer = require('multer');

const app = express();

const fileUpload = multer({
  storage: multer.diskStorage({
    destination: './uploads',
    filename: (req, file, cb) => {
      const fileName = file.originalname + '-' + Date.now() + '.png';
      cb(null, fileName);
    },
  }),
});

app.post('/upload', fileUpload.single('file'), (req, res) => {

    const file = req.file;

  res.send("File Uploaded Successfully");

});

app.listen(3000, () => {
  console.log('Server started on port 3000.');
});