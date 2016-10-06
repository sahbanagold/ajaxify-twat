'use strict';
var model = require('../models')
class Users_Controller{
  static get_users(add,callback){
    model.users.findAll({
      attributes: ['name','phone','address','email','password'],
      where:{
        id: add.id
      }
    }).then(function(result){
      callback(result)
    })
  }
  static get_users(callback){
    model.users.findAll({

    }).then(function(result){
      callback(result)
    })
  }
  static add_user(add,callback){
    model.users.create({
      name: add.name,
      phone: add.phone,
      address: add.address,
      email: add.email,
      password: add.password
    }).then(function(result){
      callback(result)
    })
  }
  static update_user(add,callback){
    model.users.update({
      name: add.name,
      phone: add.phone,
      address: add.address,
      email: add.email,
      password: add.password,
      where:{
        id: add.id
      }
    }).then(function(result){
      callback(result)
    })
  }
  static delete_user(add,callback){
    model.users.destroy({
      where:{
        id: add.id
      }
    }).then(function(result){
      callback(result)
    })
  }

}

module.exports = Users_Controller
