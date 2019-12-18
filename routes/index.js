var express = require('express');
var router = express.Router();
// var http = express.
// var io = require('socket.io')
var Handlebars = require('hbs');

Handlebars.registerHelper('kd', function(context, options){
  return context + '_' + new Date();
});

/* GET home page. */
router.get('/', function(req, res, next) {


  // console.log('handlebars:', Handlebars)

  res.render('index', { title: 'Express', message: 'hello' });
});

module.exports = router;
