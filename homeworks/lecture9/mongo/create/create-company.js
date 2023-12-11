const mongoose = require('mongoose');
const { Company, Employee } = require('./mongo/schema');

const employee = new Employee({
    firstName: 'Sean',
    lastName: 'Miller',
    jobTitle: 'Software Engineer'
});

employee
    .save()
    .then(() => {
        console.log('Employee created successfully');
        const company = new Company({
            name: 'Meta',
            industry: 'Technology',
            headquarters: 'San Francisco, CA',
            _employees: [employee._id]
        });

        return company.save();
    })
    .then(() => console.log('Company Updated Successfully'))
    .then(() => {
        employee.companyID = company._id;
        return employee.save();
    })
    .then(() => console.log('Employee updated Successfully'))
    .catch(err => console.log('Error: ', err))
    .finally(() => mongoose.connection.close());