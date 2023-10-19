const fs = require('fs');
const path = require('path');

function arePathsSameFile(filePath1, filePath2) {
  const absolutePath1 = path.resolve(filePath1);
  const absolutePath2 = path.resolve(filePath2);

  try {
    const stats1 = fs.statSync(absolutePath1);
    const stats2 = fs.statSync(absolutePath2);

    return stats1.ino === stats2.ino && stats1.dev === stats2.dev;
  } catch (error) {
    return false; // If there's an error accessing either file, return false
  }
}

// Usage example
const filePath1 = './jay.txt';
const filePath2 = './jay.txt';

if (arePathsSameFile(filePath1, filePath2)) {
  console.log('The two paths refer to the same file.');
} else {
  console.log('The two paths refer to different files.');
}
