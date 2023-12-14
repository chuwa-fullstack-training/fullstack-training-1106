const express = require('express');
const utilController = require("./utilController");
const authController = require("./authController");

const router = express.Router();

router.get("/login", authController.login_get);
router.post("/login", authController.login_post);
router.get("/logout", authController.logout_get);

router.get('/companies', utilController.company_get_all, utilController.handleCompanyPage);
router.get('/employees', utilController.employee_get_all, utilController.handleEmployeePage);
router.get('/companies/:id', utilController.company_get, utilController.employee_get_company, utilController.handleCompanyGet);
router.get('/employees/:id', utilController.employee_get, utilController.handleEmployeeGet);

router.post('/companies', utilController.company_create_post, utilController.handleCompanyCreation);
router.post('/employees', utilController.employee_create_post, utilController.handleEmployeeCreation);

router.delete('/employees/:id', utilController.employee_delete, utilController.handleEmployeeDelete);
router.delete('/companies/:id', utilController.company_delete, utilController.handleCompanyDelete);

router.patch('/companies/:id', utilController.company_update, utilController.handleCompanyPatch);
router.patch('/employees/:id', utilController.employee_update, utilController.handleEmployeePatch);
module.exports = router;