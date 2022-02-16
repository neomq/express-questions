const express = require('express');
const hbs = require('hbs');

let app = express();

app.set('view engine', 'hbs');
app.use(express.static('public'));

app.get('/', function(req, res){
    res.render('index');
})

app.get('/about-us', function(req, res){
    res.render('about-us');
})

app.get('/multiply/:left/:right', function(req, res){
    let lft = req.params.left;
    let rgt = req.params.right;
    let result = lft * rgt;

    res.render('results',{
        'left': lft,
        'right': rgt,
        'answer': result
    })
})

app.get('/gallery', function(req, res){
    res.render('gallery');
})

// this is so that we can test
module.exports = app;