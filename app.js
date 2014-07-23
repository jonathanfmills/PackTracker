var express = require('express'),    // Web Server
    bodyParser = require('body-parser'), //parses JSon
    morgan = require('morgan'), //writes logs
    path = require('path'), //This module contains utilities for dealing with file paths. Use require('path') to use it. It provides the following methods:
    mongoose = require('mongoose');

console.log("sup g");
var port = process.env.PORT || 8080;
mongoose.connect('mongodb://localhost/PackTracker');

var app = express();

app.set('views',path.join(__dirname, 'app'));

app.use(express.static(path.join(path.join(__dirname, 'app'))));
app.use(bodyParser());
app.use(morgan('dev'))
morgan.token('type', function(req, res){ return req.headers['content-type']; })
app.engine('html', require('ejs').renderFile);


var apiRouter = express.Router();
require('./lib/config/apiRoutes')(apiRouter);
app.use('/api',apiRouter);

app.get('/scouts', function(req,res){
    res.render('scouts.html');
})
app.get('/scouts/:id', function(req,res){
    res.render('scouts.html');
})
app.get('/partials/navBar', function(req,res){
    res.render('partials/navBar.html');
})
app.get('*', function(req,res){
    res.render('index.html');
})
app.listen(port, function(){
    console.log('the magic is happening on port ' + port);
})


