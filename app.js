var express       = require('express');
var domain        = require('domain');
var path          = require('path');
var favicon       = require('serve-favicon');
var logger        = require('morgan');
var cookieParser  = require('cookie-parser');
var bodyParser    = require('body-parser');

var routes        = require('./routes/index');
var users         = require('./routes/users');

var cloudTest     = require('./app/leancloud/cloud_test.js');

var wxApi         = require('./app/wechat/wxapi.js');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// load leanCloud function
app.use(cloudTest);

app.use('/', routes);
app.use('/users', users);

///////////////////////////////////////////////////////////////////////////

wxApi();







/////////////////////////////////////////////////////////////////////////////

// catch unhandled exception middleware
app.use('error', function (err) {
  var d = nll;
  if (process.domain){
    d.process.domain;
  }else {
    d = domain.create();
  }
  d.add(req);
  d.add(res);
  d.on('error', function(err){
    console.error('uncaughtException url=%s, msg=%s', req.url, err.stack || err.message || err);
    if (!res.finished) {
      res.statusCode = 500;
      res.setHeader('content-type', 'application/json; charset=UTF-8');
      res.end('uncaughtException');
    }
  });
  d.run(next);
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler, will print stacktrace
if (app.get('env') === 'development') {
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler, no stacktraces leaked to user
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;
