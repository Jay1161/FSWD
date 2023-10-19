const express = require('express');

const app = express();

// Set the background color cookie
app.use((req, res, next) => {
  if (!req.cookies.backgroundColor) {
    res.cookie('backgroundColor', 'white', { expires: 365 });
  }
  next();
});

// Serve the front end
app.use(express.static(__dirname + '/public'));

// Start the server
app.listen(5001, () => {
  console.log('Server listening on port 5001');
});
