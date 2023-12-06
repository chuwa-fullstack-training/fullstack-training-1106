const express = require("express");
const axios = require("axios");
require("./config/database");
const Todo = require("./config/schema");

const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "pug");
app.set("views", "./views");

// const todos = [
//   { id: 1, todo: "first thing", done: true },
//   { id: 2, todo: "second thing", done: false },
//   { id: 3, todo: "third thing", done: false },
// ];

app.get("/", async (req, res) => {
  const response = await axios.get("http://localhost:3000/api/todos");
  const todos = response.data;
  // console.log(todos);
  res.render("index", { todos });
});

app.get("/api/todos", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

app.post("/api/todos", async (req, res) => {
  const { title, description, ...otherFields } = req.body.todo;
  // todos.push({ id: todos.length + 1, todo, done: false });
  if (!title || !description) {
    res.status(400).json({ message: "missing title and description" });
    return;
  }
  if (Object.keys(otherFields).length > 0) {
    res
      .status(400)
      .json({ message: `extra fields received: ${Object.keys(otherFields)}` });
    return;
  }
  const newTodo = new Todo({
    title: title,
    description: description,
  });
  try {
    await newTodo.save();
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

app.put("/api/todos/:id", async (req, res) => {
  const id = req.params.id;
  const { title, description, completed, ...otherFields } = req.body.todo;
  if (Object.keys(otherFields).length > 0) {
    res
      .status(400)
      .json({ message: `extra fields received: ${Object.keys(otherFields)}` });
    return;
  }
  const updateTodo = {
    title: title,
    description: description,
    completed: completed,
  };
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(id, updateTodo, {
      new: true,
    });
    if (!updateTodo) {
      res.status(400).json({ message: "todo item is not found" });
      return;
    }
    res.status(202).json(updatedTodo);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

app.delete("/api/todos/:id", async (req, res, next) => {
  const id = req.params.id;
  try {
    const deletedTodo = await Todo.findByIdAndDelete(id);
    if (!deletedTodo) {
      res.status(404).json({ message: "todo item is not found" });
      return;
    }
    res.json(deletedTodo);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
