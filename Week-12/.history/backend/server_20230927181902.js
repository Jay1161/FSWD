const express = require('express');
const app = express();

app.post('/update-background-color', (req, res) => {
  const backgroundColor = req.body.backgroundColor;

  res.cookie('backgroundColor', backgroundColor, { maxAge: 600 });

  res.sendStatus(200);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
