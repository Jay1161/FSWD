const customModule = require('./customModule');

const sum = customModule.addNumbers(5, 10);
const product = customModule.multiplyNumbers(3, 6);

console.log('Sum:', sum);
console.log('Product:', product);