const os = require('os');
const display_var = () => {
  for (const key in process.env) {
    console.log(`${key}: ${process.env[key]}`);
  }
};

display_var();