var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');

var indexRouter = require('./routes/index');
var blogRouter = require('./routes/blog');
var blogadminRouter = require('./routes/blog-admin');
var articleRouter = require('./routes/article-page');
var loginRouter = require('./routes/login');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: '111',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false }
}));

app.use('/blog-admin', function(req, res, next) {
  if (!req.session.adminLoggedIn) {
    res.redirect('/login');
  } else {
    next();
  }
});

app.use('/', indexRouter);
app.use('/blog', blogRouter);
app.use('/blog-admin', blogadminRouter);
app.use('/article-page', articleRouter);
app.use('/login', loginRouter);

app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;