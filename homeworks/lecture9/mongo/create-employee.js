const mongoose = require('./connect');
const { Company, Employee } = require('./schema');

const company = new Company({
    name: 'Google',
    description: 'Search Engine',
    headquarters: 'Mountain View, CA',
    industry: 'Technology',
    });

    let employee;
    company
        .save()
        .then(()=>{
            console.log('Company saved');
            employee = new Employee({
                firstName: 'John',
                lastName: 'Doe',
                company: company,
                startDate: new Date(),
                jobTitle: 'Software Engineer',
                resigned: false,
                salary: 100000
                });
                return employee.save();
        }).then(() => {
            company._employees.push(employee);
            return company.save();
        })
        .then(() => {
            console.log('Employee saved');
        })
        .catch((err) => {
            console.log('Error saving company', err);
        })
        .finally(() => {
            mongoose.disconnect();
        });
