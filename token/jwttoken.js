var jwt = require('json-web-token');
var result
var payload = {
  "iss": "my_issurer",
  "aud": "World",
  "iat": 1400062400223,
  "typ": "/online/transactionstatus/v2",
  "request": {
    "myTransactionId": "[myTransactionId]",
    "merchantTransactionId": "[merchantTransactionId]",
    "status": "SUCCESS"
  }
};

var secret = 'TOPSECRETTTTT';

// encode
 jwt.encode(secret, payload, function (err, token) {
  if (err) {
    return console.error(err.name, err.message);
  } else {
    console.log(token);

    result = token
    // decode
    jwt.decode(secret, token, function (err_, decode) {
      if (err) {
        return console.error(err.name, err.message);
      } else {
        console.log(decode);
      }

    });

  }
});
module.exports = result
