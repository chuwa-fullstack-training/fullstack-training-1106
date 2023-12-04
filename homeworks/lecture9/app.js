const express = require("express");
const companyRoute = require("./routes/companyRoutes");
const employeeRoute = require("./routes/employeeRoutes");
const db = require("./config/database");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use("/company", companyRoute);
app.use("/employee", employeeRoute);

app.use((errorStatus, req, res, next) => {
  res.status(errorStatus.statusCode).json({ status: "error", message: errorStatus.message });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
