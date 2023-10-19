const express = require('express');
const dotenv = require('dotenv');

const app = express();

dotenv.config();

const environment = process.env.NODE_ENV;

const credentials = {
  testing: {
    username: process.env.TEST_USERNAME,
    password: process.env.TEST_PASSWORD,
  },
  uat: {
    username: process.env.UAT_USERNAME,
    password: process.env.UAT_PASSWORD,
  },
  production: {
    username: process.env.PRODUCTION_USERNAME,
    password: process.env.PRODUCTION_PASSWORD,
  },
};

app.get('/', (req, res) => {
  const currentCredentials = credentials[environment];

  res.send(`Using credentials: ${currentCredentials}`);
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});