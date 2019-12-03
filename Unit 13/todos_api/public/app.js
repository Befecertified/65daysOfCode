$(document).ready(function(){
    //Get All Todos From Db
    $.getJSON('/api/todos')
    .then(showTodos)

    //Create a new Todo
    $('#todoInput').keypress(function(e){
        if(e.which == 13){
            createTodo();    
        }
        
    })

    //Delete a Todo
    $('.list').on('click', 'span', function(){
        var todo = $(this).parent();
        var id = todo.data('id');
        var url = '/api/todos/' + id;

        $.ajax({
            method: 'DELETE',
            url: url
        })
        .then(function(message){
            todo.remove();
            console.log(message);
        })
        // console.log('Clicked');
            // $(this).parent().remove();
    })

    //Toggle a Todo between completed and incomplete
    $('.list').on('click', 'li', function(){
        var todo = $(this);
        var id = todo.data('id');
        var url = '/api/todos/' + id;
        var isDone = !todo.data('completed');
        var updateTodo = {completed: isDone};
        console.log(updateTodo);

        $.ajax({
            method: 'PUT',
            url: url,
            data: updateTodo
        })
        .then(function(updatedTodo){
            todo.toggleClass('done');
            todo.data('completed', isDone);
        })
    })
})

function addTodo(todo){
    var todoElem = $('<li class="task">' + todo.name + '<span>X</span></li>');
    todoElem.data('id', todo._id);
    todoElem.data('completed', todo.completed)

    if (todo.completed){
        todoElem.addClass('done');
    }
    
    $('.list').append(todoElem);
}

function showTodos(todos){
    todos.forEach(todo => {
        addTodo(todo)
    });        
}

function createTodo(){
    var userInput = $('#todoInput').val();
        
    $.post('/api/todos', {name: userInput})
    .then(function(newTodo){
        addTodo(newTodo);
        $('#todoInput').val('');
    })

}
