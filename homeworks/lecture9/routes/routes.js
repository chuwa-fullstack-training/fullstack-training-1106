const express = require('express');
const controller = require("../controllers/controller");

const router = express.Router();

router.get('/company', controller.company_get_all, controller.handleCompanyPage);
router.get('/employee', controller.employee_get_all, controller.handleEmployeePage);
router.get('/company/:id', controller.company_get, controller.employee_get_company, controller.handleCompanyGet);
router.get('/employee/:id', controller.employee_get, controller.handleEmployeeGet);

router.post('/company', controller.company_create_post, controller.handleCompanyCreation);
router.post('/employee', controller.employee_create_post, controller.handleEmployeeCreation);

router.delete('/employee/:id', controller.employee_delete, controller.handleEmployeeDelete);
router.delete('/company/:id', controller.company_delete, controller.handleCompanyDelete);

router.patch('/company/:id', controller.company_update, controller.handleCompanyPatch);
router.patch('/employee/:id', controller.employee_update, controller.handleEmployeePatch);
module.exports = router;