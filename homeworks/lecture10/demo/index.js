const express = require('express');

const app = express();
//

const connectDB = require('./connect.js');
const Todo = require('./schema.js');
connectDB();

//
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'pug');
app.set('views', './views');

// const todos = [
//   { id: 1, todo: 'first thing', done: true },
//   { id: 2, todo: 'second thing', done: false },
//   { id: 3, todo: 'third thing', done: false }
// ];

app.get('/', async(req, res) => {
  try{
    const todos = await Todo.find();
    if(todos){
      res.status(200).render('index', { todos });
    }else{
        res.status(404).send("Todos Not Found");
    }
  }catch(err){
    console.log(`Error in geting all todos`, err);
    res.status(500).send("Internal Server Error");
  }  
});

app.post('/api/todos', async(req, res) => {
  // const todo = req.body.todo;
  // todos.push({ id: todos.length + 1, todo, done: false });
  // res.json(todos);
  const todoInput = req.body.todo;
  try{
    if(!todoInput ){
      req.status(400).json({
        status: 'error',
        message: 'Missing todo input',
      })
      return;
    }
    const todo = new Todo({todo: todoInput, done: false});
    await todo.save();
    const todos = await Todo.find();
    res.status(201).json(todos);
    return;
   
  }catch(err){
    res.status(500).send("Error in creating todo");
    return;
  }
});

app.put('/api/todos/:id', async(req, res) => {
  // const id = parseInt(req.params.id, 10);
  // const todo = todos.find(t => t.id === id);
  // todo.done = !todo.done;
  // res.json(todo);
  const queryId = req.params.id;
  try{
    const existingTodo = await Todo.findById(queryId);
    if (!existingTodo) {
      res.status(404).json({
        status: 'error',
        message: 'Queried todo is not found',
      });
      return;
    }
   const updateFields = {done: !(existingTodo.done)};
   const updatedTodo = await Todo.findByIdAndUpdate(queryId, updateFields, { new: true, runValidators: true});
   if(!updatedTodo){
      res.status(404).json({
        status: 'error',
        message: 'queried todo is not found',
      })
      return;
   }
   res.status(200).json({ message: "todo status is changed successfully" });
  }catch(err){
    console.error(`Error updating todo:`, err);
    res.status(500).json({ err: 'Internal Server Error' });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000: http://localhost:3000');
});
