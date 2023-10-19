const os = require('os');

function displayEnvironmentVariables() {
  const envVariables = process.env;

  console.log('Environment Variables:');
  for (let key in envVariables) {
    console.log(`${key} = ${envVariables[key]}`);
  }
}

displayEnvironmentVariables();