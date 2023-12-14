const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  getOneCompany,
  createOneCompany,
  updateOneCompany,
  deleteOneCompany,
  getAllCompanies,
  getAllEmployeeOfCompany,
} = require("../controllers/company");

const router = express.Router();

router.get("/", getAllCompanies);
router.get("/employee/:id", authMiddleware, getAllEmployeeOfCompany);
router.get("/:id", getOneCompany);
router.post("/", createOneCompany);
router.put("/:id", updateOneCompany);
router.delete("/:id", deleteOneCompany);

module.exports = router;
