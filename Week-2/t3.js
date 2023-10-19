var Client = require('node-rest-client').Client;
var client = new Client();
// direct way
client.get("https://www.google.com/", function (data, response) {
    // parsed response body as js object
    console.log(data);
    // raw response
    console.log(response);
});

// registering remote methods
client.registerMethod("jsonMethod", "https://www.google.com/", "GET");

client.methods.jsonMethod(function (data, response) {
    // parsed response body as js object
    console.log(data);
    // raw response
    console.log(response);
});