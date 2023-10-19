const os = require('os');

const printEnvironmentVariables = () => {
  for (const key in os.environ) {
    console.log(`${key} = ${os.environ[key]}`);
  }
};

if (require.main === module) {
  printEnvironmentVariables();
}