var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
require('dotenv').config();
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var app = express();

var MySQLStore = require('express-mysql-session')(session);

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

const options = {
	host: process.env.DB_HOST || '127.0.0.1',
	user: process.env.DB_USER || 'root',
	password: process.env.DB_PASS,
	database: process.env.DB_NAME || 'database',
	multipleStatements: true
};

var sessionStore = new MySQLStore(options);

app.use(
	session({
		secret: 'keyboard cat',
		resave: true,
		store: sessionStore,
		saveUninitialized: true
		// cookie: { secure: true }
	})
);
app.use(passport.initialize());
app.use(passport.session());

app.use('/', indexRouter);
app.use('/users', usersRouter);

passport.use(
	new LocalStrategy(function(email, password, done) {
		console.log(email);
		console.log(password);
		const db = require('../model/helper');
		return done(null, 'helloooooo');
	})
);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);

	res.json({ error: err });
});

module.exports = app;
