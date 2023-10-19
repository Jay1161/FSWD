const os = require('os');

const printEnvironmentVariables = () => {
  for (const key in process.env) {
    console.log(`${key}: ${process.env[key]}`);
  }
};

printEnvironmentVariables();