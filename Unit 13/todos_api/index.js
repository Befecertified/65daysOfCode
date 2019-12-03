var express = require('express'),
    app = express(),
    PORT = process.env.PORT || 3000;

var models = require('./models');
var routes = require('./routes');

//Enable Body Parsing
app.use(express.json());
app.use(express.urlencoded({extended: true}))

//Enable Static Files
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));
// app.use(express.static(__dirname + '../../assets'));

app.get('/', (req, res) => {
    res.sendFile('index.html');
})

app.use('/api/todos', routes);


app.listen(PORT, () => { 
    console.log(`App listening on Port: ${PORT}`) 
});