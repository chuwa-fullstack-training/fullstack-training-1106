const express = require('express');
const { default: mongoose } = require("mongoose");
const app = express();
mongoose.connect("mongodb+srv://yiqianya:8VhNijmHvYjfSNJC@cluster0.ekgvyey.mongodb.net/");
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'pug');
app.set('views', './views');

const todos = [
  { id: 1, todo: 'first thing', done: true },
  { id: 2, todo: 'second thing', done: false },
  { id: 3, todo: 'third thing', done: false }
];

app.get('/', (req, res) => {
  res.render('index', { todos });
});

app.use('/api', require("./routes/todo"));



app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
