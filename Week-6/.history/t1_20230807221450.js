// const os = require('os');

// const display_var = () => {
//   for (const key in os.environment) {
//     console.log(`${key}: ${os.environment[key]}`);
//   }
// };

// display_var();

const os = require('os');

const printEnvironmentVariables = function() {
  // Loop through the list of environment variables
  for (const key in os.environment) {
    // Print out the name and value of each variable
    console.log(`${key}: ${os.environment[key]}`);
  }
};

printEnvironmentVariables();