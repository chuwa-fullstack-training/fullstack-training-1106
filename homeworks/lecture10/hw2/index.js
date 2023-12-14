const connectDB = require('./db');
const express = require('express');
const { Todo } = require('./models/schema')
const mongoose = require('mongoose')

async function findAllTodos() {
  const todos = await Todo.find();
  return todos;
}

async function createTodo(title = "Default Title") {
  const todo = new Todo({ title });
  const res = await todo.save();
  console.log("A new todo is created");

  return res;
}

async function findTodoById(id) {
  const ID = new mongoose.Types.ObjectId(id);
  const todo = await Todo.findById(ID);

  return todo;
}


async function updateTodoById(id, newObj = {}) {
  let todo = await findTodoById(id);
  if (!todo) {
    throw Error("Todo Not Found");
  }
  await todo.updateOne(newObj);
  console.log("Todo item updated");
  todo = await findTodoById(id);
  return todo;
}

async function deleteTodoById(id) {
  let todo = await findTodoById(id);
  if (!todo) {
    throw Error("Todo Not Found");
  }
  let res = await todo.deleteOne();
  console.log("Todo item deleted");
  return res;
}


const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'pug');
app.set('views', './views');

connectDB();
//createTodo().then(() => findAllTodos()).then((t) => console.log(t));

/* const todos = [
  { id: 1, title: 'first thing', done: true },
  { id: 2, title: 'second thing', done: false },
  { id: 3, title: 'third thing', done: false }
];
 */
app.get('/', async (req, res) => {
  try {
    const todos = await findAllTodos();
    res.render('index', { todos });
  } catch (e) {
    res.status(500).send("Internal Error");
  }
});


app.post('/api/todos', async (req, res) => {
  try {
    const title = req.body.title;
    const newTodo = await createTodo(title);
    res.json(newTodo);
  } catch (e) {
    res.status(500).send("Internal Error");
  }
});

app.put('/api/todos/:id', async (req, res) => {
  try {
    /* const todo = await findTodoById(req.params.id);
    const obj = {};
    obj.done = !todo.done;
    console.log(`New modified todo object ` + JSON.stringify(obj)); */
    const newTodo = await updateTodoById(req.params.id, req.body);

    console.log(newTodo);
    res.json(newTodo);
  } catch (e) {
    res.status(500).send("Internal Error");
  }
});

app.delete('/api/todos/:id', async (req, res) => {
  try {
    const result = await deleteTodoById(req.params.id);
    console.log(result);
    res.json(result);
  } catch (e) {
    res.status(500).send("Internal Error");
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
