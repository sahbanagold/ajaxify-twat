// encode
var jwt = require('json-web-token');




module.exports = function (secret,payload) {
  var result
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
 return result
}
