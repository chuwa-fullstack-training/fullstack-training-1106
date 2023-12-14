const express = require("express");
const app = express();
const todoRouter = require("./routers/todoRouter");
require("dotenv").config();
const port = process.env.PORT;
const connectDB = require("./db/index");

connectDB();

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "pug");
app.set("views", "./views");

app.use("/api", todoRouter);
app.get("/", async (req, res) => {
  const Todo = require("./models/todo");
  const todos = await Todo.find();
  res.status(200).render("index", { todos });
});
app.listen(port, () => {
  console.log(`listening at ${port}`);
});
