const fs = require('fs');
const path = require('path');

fs.writeFile('example.txt', 'Hello, world!', (err) => {
  if (err) throw err;
console.log('File created!');
});

fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log('File content:', data);
});

fs.appendFile('example.txt', '\nThis is appended content.', (err) => {
  if (err) throw err;
  console.log('Content appended!');
});

fs.rename('example.txt', 'new-example.txt', (err) => {
  if (err) throw err;
  console.log('File renamed!');
});

fs.readdir('.', (err, files) => {
  if (err) throw err;
  console.log('Files/directories in the current directory:', files);
});

fs.unlink('Jay.txt', (err) => {
  if (err) throw err;
  console.log('File deleted!');
});