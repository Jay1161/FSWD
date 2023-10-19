// const express = require('express');
// const cookieParser = require('cookie-parser');

// const app = express();
// const PORT = process.env.PORT || 3001;

// app.use(express.json());
// app.use(cookieParser());

// app.get('/getBackgroundColor', (req, res) => {
//   const backgroundColor = req.cookies.backgroundColor || 'white';
//   res.json({ backgroundColor });
// });

// app.post('/setBackgroundColor', (req, res) => {
//   const { color } = req.body;
//   res.cookie('backgroundColor', color, { maxAge: 900000 }); // Set a cookie that expires in 15 minutes
//   res.send('Background color set successfully!');
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });


const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());

app.get('/getBackgroundColor', (req, res) => {
  const backgroundColor = req.cookies.backgroundColor || 'white';
  res.json({ backgroundColor });
});

app.post('/setBackgroundColor', (req, res) => {
  const { color } = req.body;
  res.cookie('backgroundColor', color, { maxAge: 900000 }); // Set a cookie that expires in 15 minutes
  res.send('Background color set successfully!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
