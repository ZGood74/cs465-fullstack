require('dotenv').config(); // Load .env first

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var hbs = require('hbs');
var cors = require('cors');
var passport = require('passport');

require('./app_api/models/db');       // Connect to MongoDB
require('./app_api/models/user');     // Register User model BEFORE passport
require('./app_api/config/passport'); // Load passport config (uses User)

var indexRouter = require('./app_server/routes/index');
var usersRouter = require('./app_server/routes/users');
var travlrRouter = require('./app_server/routes/travlr');
var apiRouter = require('./app_api/routes/index');

var app = express();

app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'hbs');

// register partials
hbs.registerPartials(path.join(__dirname, 'app_server', 'views', 'partials'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//  Initialize passport middleware
app.use(passport.initialize());

//  Allow Authorization header for JWTs
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  next();
});

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/travel', travlrRouter);
app.use('/api', apiRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

//  Handle JWT errors gracefully
app.use(function(err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401).json({ message: err.name + ": " + err.message });
  } else {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    res.render('error');
  }
});

module.exports = app;
