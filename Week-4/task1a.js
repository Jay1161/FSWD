const urlModule = require('url');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a URL: ', (inputUrl) => {
  const parsedUrl = urlModule.parse(inputUrl, true);
  
  const protocol = parsedUrl.protocol;
  const host = parsedUrl.host;
  const path = parsedUrl.pathname;
  const queryParameters = parsedUrl.query;
  
  console.log(`Protocol: ${protocol}`);
  console.log(`Host: ${host}`);
  console.log(`Path: ${path}`);
  console.log(`Query Parameters:`);
  console.log(queryParameters);
  
  rl.close();
});
