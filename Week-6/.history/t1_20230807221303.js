const os = require('os');
const display_var = () => {
  for (const key in os.environment) {
    console.log(`${key}: ${os.environment[key]}`);
  }
};

display_var();
