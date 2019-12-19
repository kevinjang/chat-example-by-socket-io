var express = require('express');
var app = express();
var router = express.Router();
var http = require('http').Server(app);
// var http = express.
// var io = require('socket.io')
var Handlebars = require('hbs');
var io = require('socket.io')(http);
var _socket;
Handlebars.registerHelper('kd', function(context, options){
  return context + '_' + new Date();
});

// io.on('connection', function(socket){
//   console.log('io-on-connection-socket:', socket);
//   _socket = socket;
// });

// console.log('io:', io)
io.on('connection', function(socket){
  // _socket = socket
  socket.on('news', function(data){
    console.log('news data:', data);
  })
  // console.log('a user conneced socket:', socket);
})


/* GET home page. */
router.get('/', function(req, res, next) {
  
  // const socket = io('http://localhost:3000/');
  console.log('io:', io.sockets)
  // console.log('handlebars:', Handlebars)
  console.log('_socket:', _socket);

  // socket.open()
  // console.log('socket.handshake:', socket.handshake)

  // _socket.on('message', function(item){
  //   console.log('indexjs item:', item);
  // });
  // socket.open();
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
