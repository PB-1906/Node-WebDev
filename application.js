var express = require('express');

var app=express();
app.set('view engine', 'ejs');
app.use('/assets',express.static('assets'));
app.get('/', function(req, res){
    res.sendFile(__dirname+'/index.html');

});
app.get('/contact',function(req, res){
    res.sendFile(__dirname+'/404.html');
});
app.get('/profile/:name',function(req, res){
    res.render('profile',{person: req.params.name});
});
app.listen(3000);
