var express = require('express');
var app = require('express')();
var http = require('http').Server(app);
var path = require('path');

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '/..', 'index.html'));
});

app.use("/",express.static(path.resolve(__dirname + "/../")));

http.listen(8000, function(){
  console.log('listening on *:8000');
});