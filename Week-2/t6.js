const fs = require('fs');

function compareFiles(file1Path, file2Path) {
  const file1Stats = fs.statSync(file1Path);
  const file2Stats = fs.statSync(file2Path);

  const file1Size = file1Stats.size;
  const file2Size = file2Stats.size;

  if (file1Size > file2Size) {
    console.log(`${file1Path} is larger than ${file2Path}`);
  } else if (file1Size < file2Size) {
    console.log(`${file2Path} is larger than ${file1Path}`);
  } else {
    console.log(`Both ${file1Path} and ${file2Path} have the same size`);
  }

  const file1Lines = fs.readFileSync(file1Path, 'utf-8').split('\n');
  const file2Lines = fs.readFileSync(file2Path, 'utf-8').split('\n');

  for (let i = 0; i < file1Lines.length; i++) {
    if (file1Lines[i] !== file2Lines[i]) {
      console.log(`Difference found at line ${i + 1}:`);
      console.log(`${file1Path}: ${file1Lines[i]}`);
      console.log(`${file2Path}: ${file2Lines[i]}`);
      console.log('---');
    }
  }
}

// Usage example
const file1Path = 'file1.txt';
const file2Path = 'file2.txt';

compareFiles(file1Path, file2Path);
