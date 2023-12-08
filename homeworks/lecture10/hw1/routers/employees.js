const express = require('express');
const {
    createemployee,
    getemployee,
    updateemployee,
    deleteemployee,
    getallemployees,
    getallemployeesofcom
} = require('../controllers/employees');

const router = express.Router();

router.post('/createemployee', createemployee);

router.get('/getemployee/:id', getemployee);

router.get('/getallemployees', getallemployees);

router.get('/getallemployeesofcom/:id', getallemployeesofcom);

router.put('/updateemployee/:id', updateemployee);

router.delete('/deleteemployee/:id', deleteemployee);


module.exports = router;