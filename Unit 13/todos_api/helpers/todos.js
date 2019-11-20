var db = require('../models');

exports.getTodos = (req, res) => {
    db.Todo.find()
    .then(function(todos){
        res.send(todos);
    })
    .catch(function(err){
        res.send(err);
    })
}

exports.createTodos = (req, res) => {
    db.Todo.create(req.body)
    .then(function(newTodo){
        res.status(201).json(newTodo);
    })
    .catch(function(err){
        res.send(err);
    })
}

exports.getTodo = (req, res) => {
    var id = req.params.todoId;

    db.Todo.findById(id)
    .then(function(foundTodo){
        res.json(foundTodo);
    })
    .catch(function(err){
        res.send(err)
    })
}

exports.updateTodo = (req, res) => {
    var id = req.params.todoId;
    
    db.Todo.findOneAndUpdate({_id: id}, req.body, {new: true})
    .then(function(updatedTodo){
        res.json(updatedTodo);
    })
    .catch(function(err){
        res.send(err);
    })
}

exports.deleteTodo = (req, res) => {
    var id = req.params.todoId;

    db.Todo.remove({_id: id})
    .then(function(){
        res.json({message: "DELETED"});
    })
    .catch(function(err){
        res.send(err);
    })
}

module.exports = exports;