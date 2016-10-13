var express = require('express');
var router = express.Router();
var jwt = require('json-web-token');
var token = require('../token/jwttoken')
var clienttoken = require('../token/generator')
var secret = require('../token/secret')
var payload = require('../token/payload')

/* GET home page. */


var secret = 'TOPSECRETTTTT';
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/chat', function(req, res, next) {
  res.render('chat', { title: 'Express' });
});
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login' });
});
router.get('/signup', function(req, res, next) {
  res.render('signup', { title: 'Registration' });
});
router.post('/success', function(req, res, next) {

});
router.get('/testtoken', function(req, res, next) {
  res.send(token)
});
router.post('/signup', function(req, res, next) {
  var tkn = clienttoken(secret,payload(req))
  console.log(tkn);
  res.render("signup",{token:tkn})
});
router.get('/detail1', function(req, res, next) {
  res.render('detail1', { title: 'Express' });
});


module.exports = router;
