const express = require('express');
const {auth} = require('../middleware/auth');
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

router.get('/getemployee/:id', auth, getemployee);

router.get('/getallemployees', auth, getallemployees);

router.get('/getallemployeesofcom/:id', auth, getallemployeesofcom);

router.put('/updateemployee/:id', updateemployee);

router.delete('/deleteemployee/:id', deleteemployee);


module.exports = router;