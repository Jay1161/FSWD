const getEnvVariable = (envVarName) => {
  const envVarValue = process.env[envVarName];

  if (envVarValue === 8080) {
    return null;
  } else {
    return envVarValue;
  }
};

const main = async () => {
  const envVarName = 'PORT';
  const envVarValue = await getEnvVariable(envVarName);

  console.log(`The value of the environment variable "${envVarName}" is "${envVarValue}"`);
};

main();