const express = require('express');
const hbs = require('hbs');
var helpers = require('handlebars-helpers')({
  handlebars: hbs.handlebars
});
const path = require('path');
let app = express();

app.set('view engine', hbs);
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname, '/public')));

// YOUR CODE HERE
app.get('/welcome/:image_no', function(req, res){
  let img = request.params.image_no;
  
})

module.exports = app;