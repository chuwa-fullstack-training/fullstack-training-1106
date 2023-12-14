const express = require('express');
const auth = require('../middlewares/auth');
const {
    CreateEmployee,
    FindAllEmployees,
    UpdateEmployeeById,
    FindEmployeesByCompany,
    FindEmployeeById,
    DeleteEmployeeById,
} = require('../controllers/employee');
const {
    CreateCompany,
    FindAllCompanies,
    UpdateCompanyById,
    FindCompanyById,
    DeleteCompanyById
} = require('../controllers/company')

const router = express.Router();


router.post("/employees", CreateEmployee);
router.get("/employees", auth, FindAllEmployees);
router.put("/employees/:id", UpdateEmployeeById);
router.get("/employees/company/:id", auth, FindEmployeesByCompany);
router.get("/employees/:id", auth, FindEmployeeById);
router.delete("/employees/:id", DeleteEmployeeById);

router.post("/companies", CreateCompany);
router.get("/companies", FindAllCompanies);
router.put("/companies/:id", UpdateCompanyById);
router.get("/companies/:id", FindCompanyById);
router.delete("/companies/:id", DeleteCompanyById);

//router.all("*", (_, res) => res.status(404).send('this is the 404 page'));

module.exports = router;