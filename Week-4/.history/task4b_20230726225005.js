const fs = require('fs');

function check(filePath) {
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      console.log('Error: The file does not exist.');
    } else {
      console.log('Success: The file exists.');
    }
  });
}

// Usage example
const filePath = '/path/to/example.txt';
check(filePath);
