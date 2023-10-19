const crypto = require('crypto');

// Generate a random secure secret key
const generateSecretKey = () => {
  const secretKeyLength = 64; // You can adjust the length as needed
  return crypto.randomBytes(secretKeyLength).toString('hex');
};

const secretKey = generateSecretKey();

console.log(`Generated Secret Key: ${secretKey}`);
