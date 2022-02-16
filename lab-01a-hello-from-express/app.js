const express = require('express');

let app = express();

app.set('views', __dirname + '/views');

app.get('/', function(req,res){
    res.send("Hello everyone!");
})

app.get('/goodbye', function(req,res){
    res.send("So long and thank you for all the fish!");
})

app.get('/correct_me', function(req,res){
    res.send("Corwin of amber");
})

app.get('/faulty', function(req,res){
    res.send("the quick brown fox jumps over the lazy dog");
})

module.exports = app;