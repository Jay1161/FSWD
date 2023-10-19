const path = require('path');

function extractFileExtension(filePath) {
  const extension = path.extname(filePath);
  return extension;
}

// Usage example
const filePath = './jay.txt';
const fileExtension = extractFileExtension(filePath);

if (fileExtension) {
  console.log(`The file extension is: ${fileExtension}`);
} else {
  console.log('The file path does not have a valid file extension.');
}