require('dotenv').config();

const express = require('express');
const app = express();

const environment = process.env.NODE_ENV || 'development';

const dbUser = process.env[`${environment}_DB_USER`];
const dbPassword = process.env[`${environment}_DB_PASSWORD`];

app.get('/', (req, res) => {
  res.send(`Hello from ${environment} environment!`);
});

app.get('/dbCredentials', (req, res) => {
  res.json({ user: dbUser, password: dbPassword });
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
