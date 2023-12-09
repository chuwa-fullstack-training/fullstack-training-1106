const mongoose = require('mongoose');
const Employee = require('../models/Employee');
const CustomAPIError = require('../errors/customAPIError');

//Create a new employee
const createNewEmployee = (req, res)=>{
    const employee = new Employee(req.body);
    
    employee
        .save()
        .then(()=>{
            console.log(`Employee: ${employee.firstName} ${employee.lastName} has created.`)
            res.status(201).json({result:'success'});
        })
        .catch(e=>{
            console.log(e);
            res.status(500).json({result:'Server Error'});
        })
};

//Get an employee by id
const getEmployeeById = (req, res)=>{
    const id = new mongoose.Types.ObjectId(req.params?.id);

    Employee
        .findById(id)
        .then((employee)=>{
            if(employee === null){
                res.status(404).json({result: 'Not Found'});
            }
            else{
                console.log(employee);
                res.status(200).json(employee);
            }
        })
        .catch(e=>{
            console.log(e);
            res.status(500).json({result:'Server Error'});
        });
};

//Update an employee by id
const updateEmployeeById = (req, res)=>{
    const id = new mongoose.Types.ObjectId(req.params?.id);

    Employee.findByIdAndUpdate(id, req.body)
        .then((doc)=>{
            if(doc === null){
                res.status(404).json({result: 'Not Found'});
            }
            else{
                console.log(`EmployeeId: ${req.params?.id} has updated.`)
                res.status(200).json({result:'success'});
            }
        })
        .catch(e=>{
            console.log(e);
            res.status(500).json({result:'Server Error'});
        });
};

//Delete an employee by id
const deleteEmployeeById = (req,res)=>{
    const id = new mongoose.Types.ObjectId(req.params?.id);

    Employee.findByIdAndDelete(id)
        .then((doc)=>{
            if(doc === null){
                res.status(404).json({result: 'Not Found'});
            }
            else{
                console.log(`EmployeeId: ${req.params?.id} has deleted.`)
                res.status(204).json({result:'success'});
            }
        })
        .catch(e=>{
            console.log(e);
            res.status(500).json({result:'Server Error'});
        });
};

//Get all employees
const getAllEmployees = async (req,res)=>{
    try{
        let employees;
        if(!req.user){
            employees = await Employee.find({}, ['firstName','lastName']);
        }
        else{
            employees = await Employee.find();
        }
        res.status(200).json(employees);
    }
    catch(e){
        console.log(e);
        res.status(500).json({result:'Server Error'});
    }
};

//Get all employees of a company
const getAllEmployeesOfCompany = async (req,res)=>{
    if(!req.user){
        return res.status(400).json({msg:'Please Login!'});
    }

    const id = new mongoose.Types.ObjectId(req.params?.id);

    try{
        if(id.toString() !== req.user.company){
            return res.status(400).json({msg:'You do not belong to this company and have no authority!'}); 
        }

        const employees = await Employee.find({company: id});
        res.status(200).json(employees);
    }
    catch(e){
        console.log(e);
        res.status(500).json({result:'Server Error'});
    }
};

//Get all employees of a manager
const getAllEmployeesOfManager = (req,res)=>{
    const id = new mongoose.Types.ObjectId(req.params?.id);

    Employee.find({_manager: id})
        .then((employees)=>{
            console.log(employees);
            res.status(200).json(employees);
        })
        .catch((e)=>{
            console.log(e);
            res.status(500).json({result:'Server Error'});
        });
};

module.exports = {
    createNewEmployee,
    getEmployeeById,
    updateEmployeeById,
    deleteEmployeeById,
    getAllEmployees,
    getAllEmployeesOfCompany,
    getAllEmployeesOfManager
};
