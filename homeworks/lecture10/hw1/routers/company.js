const express = require("expresss");
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
router.get("/employee/:id", getAllEmployeeOfCompany);
router.get("/:id", getOneCompany);
router.post("/", createOneCompany);
router.put("/:id", updateOneCompany);
router.delete("/:id", deleteOneCompany);

module.exports = router;
