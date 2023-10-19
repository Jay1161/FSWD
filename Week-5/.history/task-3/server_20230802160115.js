const express = require('express');
const multer = require('multer');

const app = express();

// Create a file upload middleware.
const fileUpload = multer({
  storage: multer.diskStorage({
    destination: './uploads',
    filename: (req, file, cb) => {
      const fileName = file.originalname + '-' + Date.now() + '.png';
      cb(null, fileName);
    },
  }),
});

// Create a route to upload a file.
app.post('/upload', fileUpload.single('file'), (req, res) => {
  // Get the uploaded file.
  const file = req.file;

  // Save the file to the filesystem.
  file.save().then(() => {
    res.status(200).json({
      message: 'File uploaded successfully.',
    });
  });
});

app.listen(3000, () => {
  console.log('Server started on port 3000.');
});