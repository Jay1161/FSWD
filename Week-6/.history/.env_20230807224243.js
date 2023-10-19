const dotenv = require('dotenv');
if (process.env.NODE_ENV === 'testing') {
  dotenv.config({ path: '.env.testing' });
} else if (process.env.NODE_ENV === 'uat') {
  dotenv.config({ path: '.env.uat' });
}
const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
console.log('DB_HOST:', dbHost);
console.log('DB_USER:', dbUser);
console.log('DB_PASSWORD:', dbPassword);