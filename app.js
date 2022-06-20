require('dotenv').config();
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require("cors")
const mongoose = require("mongoose")
const app = express();

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
// const happyRouter = require('./routes/happy');
const journalsRouter = require('./routes/journals');

mongoose
.connect(process.env.DB_URI, {
  dbName: process.env.DB_NAME,
  user: process.env.DB_USER,
  pass: process.env.DB_PASS,
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then((res) => console.log('db connected'))
.catch((err) => console.log("Could not connect to dB ", err));


app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// app.get("/users", (req, res) => {
//   res.send("Darrel")
// })
app.use('/', indexRouter);
app.use('/users', usersRouter);
// app.use('/happy', happyRouter)
app.use('/journals', journalsRouter);

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
  // res.render('error');
  res.json({
    message: err.message,
    error: err
  });

});

module.exports = app;
