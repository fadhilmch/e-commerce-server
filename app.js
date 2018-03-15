var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors')

var index = require('./routes/index');
var users = require('./routes/users');
var items = require('./routes/items');
var transactions = require('./routes/transactions');

var app = express();

// const dbURL = 'mongodb://localhost:27017/e-commerce'
const dbURL = 'mongodb://fadhilmch:123456@ds215019.mlab.com:15019/faduino'
const db = mongoose.connection;

app.use(cors())

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/items', items);
app.use('/transactions', transactions);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
 var err = new Error('Not Found');
 err.status = 404;
 next(err);
});

mongoose.connect(dbURL, err => {
  if(!err)
    console.log('Connected to database');
  else {
    console.log('Error connect to database');
  }
})

// error handler
app.use(function(err, req, res, next) {
 // set locals, only providing error in development
 res.locals.message = err.message;
 res.locals.error = req.app.get('env') === 'development' ? err : {};

 // render the error page
 res.status(err.status || 500);
 res.render('error');
});

module.exports = app;
