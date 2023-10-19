const urlModule = require('url');

function resolveAbsoluteURL(baseURL, relativePath) {
  const absoluteURL = urlModule.resolve(baseURL, relativePath);
  return absoluteURL;
}

const baseURL = 'https://www.amazon.in/';
const relativePath = '/iphone1200';
const absoluteURL = resolveAbsoluteURL(baseURL, relativePath);
console.log('Absolute URL:', absoluteURL);
