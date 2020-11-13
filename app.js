var createError = require('http-errors');
var express = require('express');
var logger = require('morgan');

var cakesRouter = require('./routes/cakes');

var app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/cake', cakesRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

module.exports = app;
