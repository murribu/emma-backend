var express = require('express');
var bodyParser = require('body-parser');
var urlverify = require('./urlverify');
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var port = 8080;

app.listen(port);

app.get('/', function(req, res){
    res.json('it works');
})
app.post('/', urlverify.httpResponse)

console.log('Cory Martin\'s Emma project API server started on: ' + port);