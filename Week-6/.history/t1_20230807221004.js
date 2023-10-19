const printEnvironmentVariables = () => {
  for (const key in process.env) {
    console.log(`${key}: ${process.env[key]}`);
  }
};

printEnvironmentVariables();