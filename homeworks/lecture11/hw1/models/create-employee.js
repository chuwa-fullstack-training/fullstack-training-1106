const { Employee } = require('./schema');

/**
 * Create a new employee
 */

async function createEmployee(defaultObj = {}) {
    let { firstName, lastName, jobTitle, resigned, salary } = defaultObj;
    firstName = firstName || "Sam";
    lastName = lastName || "Lin";
    jobTitle = jobTitle || "Software Engineer";
    resigned = resigned || false;
    salary = salary || 70000;

    const employee = new Employee({
        firstName,
        lastName,
        jobTitle,
        resigned,
        salary
    });

    const res = await employee.save();
    console.log('Employee saved');
    return res;
}

module.exports = createEmployee;
