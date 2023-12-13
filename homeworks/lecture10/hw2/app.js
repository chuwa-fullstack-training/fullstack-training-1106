const express = require('express');
const mongoose = require("mongoose");
const { Todo } = require("./schema");
const app = express();
require('dotenv').config();

// connect to mangodb & listen for requests
const dbURI = process.env.MONGODB_URL;
mongoose.connect(dbURI)
   .then(_ => app.listen(3000))
   .catch(err => console.error(err));

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'pug');
app.set('views', './views');

let todos = [];

app.get('/', (req, res) => {
   Todo.find()
      .then(result => {
         res.render('index', { todos: result });
      })
      .catch(err => { res.status(500).send(`Get error: ${err}`) })
});

app.post('/api/todos', (req, res) => {
   // create a new task
   const todo = new Todo({ name: req.body.todo });
   todo.save()
      .then(result => {
         todos.push({ id: todos.length + 1, result, done: false });
         res.json(todos);
      })
});

app.put('/api/todos/:id', (req, res) => {
   // update complete state of an element
   const id = req.params.id;
   Todo.findById(id)
      .then(result => {
         return Todo.updateOne({ _id: id}, { $set: {name: result.name, completed: !result.completed} });
      })
});
