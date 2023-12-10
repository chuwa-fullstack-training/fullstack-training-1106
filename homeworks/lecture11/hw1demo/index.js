const express = require("express");
const loginRouter = require("./routers/loginRouter");
const companyRouter = require("./routers/companyRouter");
const employeeRouter = require("./routers/employeeRouter");
const connectDB = require("./db/mongodb-connect");
const errorHandlerMiddleware = require("./middlewares/errorHandler");
const app = express();
const port = 3000;

connectDB();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api", loginRouter);
app.use("/api", companyRouter);
app.use("/api", employeeRouter);

// if no URL matched
app.use((req, res, next) => {
  const err = new Error("Page Not Found");
  err.statusCode = 404;
  next(err);
});

// handle all errors, such as next(err)
app.use(errorHandlerMiddleware);

app.listen(port, () => console.log(`app is listening on ${port}`));
