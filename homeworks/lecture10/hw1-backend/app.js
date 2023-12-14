var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
let companyRouter = require('./routes/company');
let employeeRouter = require('./routes/employee');
const mongoose = require('mongoose');

const MONGO_URL = 'mongodb://mongoadmin:mongoadmin@localhost:27017';
mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
// 连接成功
db.on('connected', function () {
    console.log('MongoDB 连接成功！');
});

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/company', companyRouter);
app.use('/employee', employeeRouter);


module.exports = app;
