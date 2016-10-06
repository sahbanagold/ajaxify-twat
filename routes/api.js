var express = require('express');
var router = express.Router();
var items_controller = require('../controller/items')
var users_controller = require('../controller/users')
var transactions_controller = require('../controller/transactions')

router.get('/items', function(req, res, next) {

  items_controller.get_items(function (result) {
    res.json(result)
})
});
router.get('/users', function(req, res, next) {

  users_controller.get_users(function (result) {
    res.json(result)
})
});
router.get('/items/:id', function(req, res, next) {
  items_controller.get_item({id: req.params.id},function (result) {
    res.json(result)
})
});
router.post('/items', function(req, res, next) {
  var object_item = {
    name: req.body.name,
    price: req.body.price,
    category: req.body.category,
    tag: req.body.tag,
    picture_location: req.body.picture_location,
  }
      items_controller.add_item(object_item,function (result) {
        res.json(result)
    })

});
router.post('/users', function(req, res, next) {mn
  var object_user = {
    name: req.body.name,
    phone: req.body.phone,
    address: req.body.address,
    email: req.body.email,
    password: req.body.password,
  }
      users_controller.add_user(object_user,function (result) {
        res.json(result)
    })

});
router.put('/items/:id', function(req, res, next) {
  var object_item = {
    id: req.params.id,
    name: req.body.name,
    price: req.body.price,
    category: req.body.category,
    tag: req.body.tag,
    picture_location: req.body.picture_location,
  }
      items_controller.update_item(object_item,function (result) {
        res.json(result)
    })

});
router.delete('/items/:id', function(req, res, next) {
  items_controller.delete_item({id: req.params.id},function (result) {
    res.json(result)
})
});

module.exports = router;
