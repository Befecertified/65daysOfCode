var express = require('express'),
    app = express(),
    PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send({message: "Working!!!"});
})


app.listen(PORT, () => { 
    console.log(`App listening on Port: ${PORT}`) 
});