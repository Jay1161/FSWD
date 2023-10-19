const os = require('os');

const display_var = () => {
  for (const key in environment) {
    console.log(`${key}: ${environment[key]}`);
  }
};

display_var();