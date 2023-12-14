const express = require("express");
const employeeRouter = require("./routers/employee");
const companyRouter = require("./routers/company");
const connectDB = require("./db");
const app = express();
require("dotenv").config();
const port = process.env.PORT;
const handleLogin = require("./controllers/auth");
connectDB();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post("/api/login", handleLogin);
app.use("/company", companyRouter);
app.use("/employee", employeeRouter);

app.listen(port, () => {
  console.log(`listening at ${port}`);
});
