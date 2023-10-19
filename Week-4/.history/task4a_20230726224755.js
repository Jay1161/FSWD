const readline = require('readline');
const path = require('path');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function extract(filePath) {
  const directoryName = path.dirname(filePath);
  const baseName = path.basename(filePath);

  return { directoryName, baseName };
}

rl.question('Enter a file path: ', (filePath) => {
  const { directoryName, baseName } = extract(filePath);

  console.log(`Directory name: ${directoryName}`);
  console.log(`Base name: ${baseName}`);

  rl.close();
});
