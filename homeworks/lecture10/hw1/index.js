const express = require("express");
const employeeRouter = require("./routers/employee");
const companyRouter = require("./hw1/routers/company");
const connectDB = require("./db");
const app = express();
require("dotenv").config();
const port = process.env.PORT;

connectDB();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/company", companyRouter);
app.use("/employee", employeeRouter);

app.listen(port, () => {
  console.log(`listening at ${port}`);
});
