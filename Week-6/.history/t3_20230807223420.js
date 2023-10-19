const dotenv = require('dotenv');

const config = dotenv.config();

if (config.error) {
  console.error(config.error);
  process.exit(1);
}

const environment = config.parsed;

console.log(`Environment: ${environment}`);

const testCredentials = {
  username: environment.TEST_USERNAME,
  password: environment.TEST_PASSWORD,
};

const UATCredentials = {
  username: environment.UAT_USERNAME,
  password: environment.UAT_PASSWORD,
};

const productionCredentials = {
  username: environment.PRODUCTION_USERNAME,
  password: environment.PRODUCTION_PASSWORD,
};

const currentEnvironment = process.env.NODE_ENV;

switch (currentEnvironment) {
  case 'testing':
    console.log(`Using testing credentials: ${testCredentials}`);
    break;
  case 'uat':
    console.log(`Using UAT credentials: ${UATCredentials}`);
    break;
  case 'production':
    console.log(`Using production credentials: ${productionCredentials}`);
    break;
  default:
    console.log(`Unknown environment: ${currentEnvironment}`);
}