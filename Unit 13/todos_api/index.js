var express = require('express'),
    app = express(),
    PORT = process.env.PORT || 3000;

var models = require('./models');
var routes = require('./routes');

app.get('/', (req, res) => {
    res.json(
        { message: "Working!!!" }
    );
})

app.use('/api/todos', routes);


app.listen(PORT, () => { 
    console.log(`App listening on Port: ${PORT}`) 
});