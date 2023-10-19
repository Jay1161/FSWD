const url = require('url');
const querystring = require('querystring');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a URL with a query string: ', (inputUrl) => {
  const parsedUrl = url.parse(inputUrl);
  
  if (!parsedUrl.query) {
    console.log('The provided URL does not contain a query string.');
    rl.close();
    return;
  }
  
  const queryParameters = querystring.parse(parsedUrl.query);
  
  console.log('Query Parameters:');
  console.log(queryParameters);
  
  rl.close();
});