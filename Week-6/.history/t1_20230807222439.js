const os = require('os');

const printEnvironmentVariables = () => {
  for (const key in os.environment) {
    console.log(`${key}: ${os.environment[key]}`);
  }
};

if (__name__ === '__main__') {
  printEnvironmentVariables();
}