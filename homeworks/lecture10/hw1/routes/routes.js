const express = require('express');
const controller = require("../controllers/controller");

const router = express.Router();

router.get('/companys', controller.company_get_all, controller.handleCompanyPage);
router.get('/employees', controller.employee_get_all, controller.handleEmployeePage);
router.get('/companies/:id', controller.company_get, controller.employee_get_company, controller.handleCompanyGet);
router.get('/employees/:id', controller.employee_get, controller.handleEmployeeGet);

router.post('/companies', controller.company_create_post, controller.handleCompanyCreation);
router.post('/employees', controller.employee_create_post, controller.handleEmployeeCreation);

router.delete('/employees/:id', controller.employee_delete, controller.handleEmployeeDelete);
router.delete('/companies/:id', controller.company_delete, controller.handleCompanyDelete);

router.patch('/companies/:id', controller.company_update, controller.handleCompanyPatch);
router.patch('/employees/:id', controller.employee_update, controller.handleEmployeePatch);
module.exports = router;