var express = require('express'),
    Router = express.Router();

var db = require('../models');

Router.get('/', (req, res) => {
    db.Todo.find()
    .then(function(todos){
        res.send(todos);
    })
    .catch(function(err){
        res.send(err);
    })
})

module.exports = Router;
