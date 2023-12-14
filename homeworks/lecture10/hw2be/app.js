var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var todoRouter = require('./routes/todo');


let mongoose = require('mongoose');
var app = express();
const MONGO_URL = 'mongodb://mongoadmin:mongoadmin@localhost:27017';
mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
// 连接成功
db.on('connected', function () {
    console.log('MongoDB 连接成功！');
});
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/todo', todoRouter);

module.exports = app;
