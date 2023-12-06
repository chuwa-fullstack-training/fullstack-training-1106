const mongoose = require('mongoose');
const { Schema } = mongoose;

// Company schema 
const companySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    headquarters: {
        type: String,
    },
    industry: {
        type: String,
    },
    _employees: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Employee',
        }
    ]
});

// Employee schema
const employeeSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
    },
    company: {
        type: Schema.Types.ObjectId,
        ref: 'Company',
    },
    startDate: {
        type: Date,
    },
    jobTitle: {
        type: String,
    },
    resigned: {
        type: Boolean,
    },
    salary: {
        type: Number,
    },
    _manager: {
        type: Schema.Types.ObjectId,
        ref: 'Employee',
    }
});

const Company = mongoose.model('Company', companySchema);
const Employee = mongoose.model('Employee', employeeSchema);

module.exports = {
    Company,
    Employee,
};



// Create a new company
const company = new Company({
    name: 'Microsoft',
});
company
    .save()
    .then(() => {
        console.log('Company saved');
    })
    .catch(err => {
        console.log('Error saving company', err);
    })
    .finally(() => {
        mongoose.connection.close();
    });


// Create a new employee
const employee = new Employee({
    firstName: 'Aaron',
    lastName: 'Zhang',
    email: 'abc@gmail.com'
});
employee
    .save()
    .then(() => {
        console.log('employee saved');
    })
    .catch(err => {
        console.log('Error employee user', err);
    })
    .finally(() => {
        mongoose.connection.close();
    });


// Get a company by id
const companyID = new mongoose.Types.ObjectId('6486a9b106afb4da78790e9a');
Company.findById(companyID)
    .then(company => {
        console.log(company);
    })
    .catch(err => {
        console.log('Error finding company', err);
    })
    .finally(() => {
        mongoose.disconnect();
    });


// Get an employee by id
const employeeID = new mongoose.Types.ObjectId('6486a9b106afb4da78790e9a');
Employee.findById(employeeID)
    .then(employee => {
        console.log(employee);
    })
    .catch(err => {
        console.log('Error finding employee', err);
    })
    .finally(() => {
        mongoose.disconnect();
    });


// Update a company by id
const companyIDforUpdate = new mongoose.Types.ObjectId('64869484e94e8123a6f69849');
Company.findByIdAndUpdate(companyIDforUpdate, {
    headquarters: 'Boston',
    industry: 'Music'
})
    .then(() => {
        console.log('Comapny updated');
    })
    .catch(err => {
        console.log('Error updating company', err);
    })
    .finally(() => {
        mongoose.disconnect();
    });


// Update an employee by id
const employeeIDforUpdate = new mongoose.Types.ObjectId('64869484e94e8123a6f69849');
Employee.findByIdAndUpdate(employeeIDforUpdate, {
    jobTitle: 'software developer II',
    salary: 80000
})
    .then(() => {
        console.log('Employee updated');
    })
    .catch(err => {
        console.log('Error updating employee', err);
    })
    .finally(() => {
        mongoose.disconnect();
    });



// Delete a company by id
const companyIDforDelete = new mongoose.Types.ObjectId('64869cf586c278fdd5576e8a');
Company.findByIdAndDelete(companyIDforDelete)
    .then(res => {
        console.log('Company deleted', res);
    })
    .catch(err => {
        console.log('Error deleting company', err);
    })
    .finally(() => {
        mongoose.disconnect();
    });


// Delete an employee by id
const employeeIDforDelete = new mongoose.Types.ObjectId('64869cf586c278fdd5576e8a');
Employee.findByIdAndDelete(employeeIDforDelete)
    .then(res => {
        console.log('Employee deleted', res);
    })
    .catch(err => {
        console.log('Error deleting employee', err);
    })
    .finally(() => {
        mongoose.disconnect();
    });


// Get all companies
Company.find()
    .then(companies => {
        console.log(companies);
    })
    .catch(err => {
        console.log('Error finding companies', err);
    })
    .finally(() => {
        mongoose.disconnect();
    });


// Get all employees
Employee.find()
    .then(employees => {
        console.log(employees);
    })
    .catch(err => {
        console.log('Error finding employees', err);
    })
    .finally(() => {
        mongoose.disconnect();
    });



// Get all employees of a company
const companyIDforEmployees = new mongoose.Types.ObjectId('6486a9b106afb4da78790e9a');
Employee.find({ company: companyIDforEmployees })
    .then(employees => {
        console.log(employees);
    })
    .catch(err => {
        console.log('Error finding employees', err);
    })
    .finally(() => {
        mongoose.disconnect();
    });
