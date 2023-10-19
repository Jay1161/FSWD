// const dotenv = require('dotenv');

// const config = dotenv.config();

// if (config.error) {
//   console.error(config.error);
//   process.exit(1);
// }

// const environment = config.parsed;

// console.log(`Environment: ${environment}`);

// const testCredentials = {
//   username: environment.TEST_USERNAME,
//   password: environment.TEST_PASSWORD,
// };

// const UATCredentials = {
//   username: environment.UAT_USERNAME,
//   password: environment.UAT_PASSWORD,
// };

// const productionCredentials = {
//   username: environment.PRODUCTION_USERNAME,
//   password: environment.PRODUCTION_PASSWORD,
// };

// console.log(`Test credentials: ${testCredentials}`);
// console.log(`UAT credentials: ${UATCredentials}`);
// console.log(`Production credentials: ${productionCredentials}`);

const dotenv = require('dotenv');

const config = dotenv.config();

if (config.error) {
  console.error(config.error);
  process.exit(1);
}

const environment = config.parsed;

console.log(`Environment: ${JSON.stringify(environment)}`);

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

console.log(`Test credentials: ${JSON.stringify(testCredentials)}`);