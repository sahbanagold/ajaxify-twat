module.exports = function (req) {
   return {
    "iss": "my_issurer",
    "aud": "World",
    "iat": 1400062400223,
    "typ": "/online/transactionstatus/v2",
    "registration": {
      "username": [`${req.body.username}`],
      "email": [`${req.body.email}`],
      "password": [`${req.body.password}`]
    }
}
}
