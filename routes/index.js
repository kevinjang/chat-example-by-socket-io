var express = require('express');
var router = express.Router();
var http = require('http');
// var http = express.
// var io = require('socket.io')
var Handlebars = require('hbs');
var io = require('socket.io-client');

Handlebars.registerHelper('kd', function(context, options){
  return context + '_' + new Date();
});


/* GET home page. */
router.get('/', function(req, res, next) {
  
  const socket = io('http://localhost:3000/')
  // console.log('handlebars:', Handlebars)
  console.log('socket:', socket);

  socket.on('message', function(item){
    console.log('indexjs item:', item);
  });
  socket.open();
  // io.on('connection', function(socket){
  //   console.log('a user connected in index.js');
  //   socket.on('message', function(data){
  //     console.log('www message data:', data);
  //   });
  //   socket.on('disconnect', function(){});
  // })
  res.render('index', { title: 'Express', message: 'hello' });
});

module.exports = router;
