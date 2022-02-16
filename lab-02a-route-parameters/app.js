const express = require ('express');
let app = express();

app.set('views', __dirname + '/views');

app.get('/header/:title', function(req,res){
    let title = req.params.title;
    res.send(`<h1>${title}</h1>`);
})

app.get('/add/:num1/:num2', function(req,res){
    let num1 = parseInt(req.params.num1);
    let num2 = parseInt(req.params.num2);
    res.send(num1+num2);
})

app.get('/shorten/:text', function(req,res){
    let txt = req.params.text;
    if (txt.length > 10){
        let new_txt = "";
        for (let i=0; i <txt.length-3; i++){
            new_txt += txt[i];
        }
        text = new_txt + "...";
    }
    res.send(text)
})

module.exports = app;