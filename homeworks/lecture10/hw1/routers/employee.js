const express = require("express");
const {
  getOneEmployee,
  createOneEmployee,
  updateOneEmployee,
  deleteOneEmployee,
  getAllEmployee,
} = require("../controllers/employee");

const router = express.Router();

router.get("/", getAllEmployee);
router.get("/:id", getOneEmployee);
router.post("/", createOneEmployee);
router.put("/:id", updateOneEmployee);
router.delete("/:id", deleteOneEmployee);

module.exports = router;
