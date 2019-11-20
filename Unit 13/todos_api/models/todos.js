var mongoose = require('mongoose');

var todoSchema = mongoose.Schema({
    name: {
        type: String,
        required: 'Please Specify Name of Activity ToDo'
    },
    completed: {
        type: Boolean,
        default: false
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

var Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;