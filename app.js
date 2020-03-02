var AWS = require("aws-sdk");
var credentials = new AWS.SharedIniFileCredentials({profile: 'eduard-account'});

AWS.config.credentials = credentials;

console.log(credentials);
