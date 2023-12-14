const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  getOneEmployee,
  createOneEmployee,
  updateOneEmployee,
  deleteOneEmployee,
  getAllEmployee,
} = require("../controllers/employee");

const router = express.Router();

router.get("/", authMiddleware, getAllEmployee);
router.get("/:id", getOneEmployee);
router.post("/", createOneEmployee);
router.put("/:id", updateOneEmployee);
router.delete("/:id", deleteOneEmployee);

module.exports = router;
