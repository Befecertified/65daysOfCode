var express = require('express'),
    Router = express.Router();

var db = require('../models');
var helpers = require('../helpers/todos');

Router.route('/')
    .get(helpers.getTodos)
    .post(helpers.createTodos);

Router.route('/:todoId')
    .get(helpers.getTodo)
    .put(helpers.updateTodo)
    .delete(helpers.deleteTodo)

module.exports = Router;
