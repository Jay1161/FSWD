const os = require('os');

const printEnvironmentVariables = () => {
  for (const key in os.process.env) {
    console.log(`${key}: ${os.process.env[key]}`);
  }
};

printEnvironmentVariables();