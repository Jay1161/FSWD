const os = require('os');

const printEnvironmentVariables = () => {
  for (const key in os.environment) {
    console.log(`${key}: ${os.environment[key]}`);
  }
};

printEnvironmentVariables();