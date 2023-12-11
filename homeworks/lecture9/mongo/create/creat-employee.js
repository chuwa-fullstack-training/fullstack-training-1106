const mongoose = require('mongoose');
const { Company, Employee } = require('./mongo/schema');

const company = new Company({
    name: 'Walmart',
    industry: 'Sales',
    headquarters: 'Bentonville, AR'
});

const employee = new Employee({
    firstName: 'John',
    lastName: 'Doe',
    jobTitle: 'Software Engineer'
});

company
    .save()
    .then(() => console.log('Company created Successfully'))
    .then(() => employee.save())
    .then(() => console.log('Employee created successfully'))
    .then(() => {
        company._employees.push(employee);
        return company.save();
    })
    .then(() => console.log('Company Updated Successfully'))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close());