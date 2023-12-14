const { Company, Employee, User } = require("./schema");
const jwt = require('jsonwebtoken');

// render methods
const handleCompanyPage = (req, res) => {
    if (req.error) { res.status(500).send("Error loading company"); }
    else { res.render('allCompanies', { companies: req.companies }); }
}

const handleEmployeePage = (req, res) => {
    if (req.error) { res.status(500).send("Error loading company"); }
    else { res.render('allEmployees', { employees: req.employees }); }
}

const handleCompanyCreation = (req, res) => {
    if (req.error) { res.status(500).send("Error creating company"); }
    else { res.redirect('/'); }
}

const handleCompanyGet = (req, res) => {
    if (req.error) { res.status(500).send("Error getting company"); }
    else {
        res.render('companyDetails', { company: req?.company, employees: req?.employees });
    }
}

const handleEmployeeCreation = (req, res) => {
    if (req.error) { res.status(500).send("Error adding employee"); }
    else { res.redirect(`/api/companies/${req.body.company}`); }
}

const handleEmployeeGet = (req, res) => {
    if (req.error) { res.status(500).send("Error getting employee"); }
    else {
        res.render('employeeDetails', { employee: req?.employee });
    }
}

const handleCompanyDelete = (req, res) => {
    if (req.error) { res.status(500).send("Error deleting company"); }
    else { res.end(); }
}

const handleEmployeeDelete = (req, res) => {
    if (req.error) { res.status(500).send("Error deleting employee"); }
    // redirect handled by frontend
    else { res.end(); }
}

const handleCompanyPatch = (req, res) => {
    if (req.error) { res.status(500).send("Error update company"); }
    else { res.json({ success: true, message: "Company updated successfully" }); }
}

const handleEmployeePatch = (req, res) => {
    if (req.error) { res.status(500).send("Error update employee"); }
    else { res.json({ success: true, message: "Company updated successfully" }); }
}

// database methods
// create a new company
const company_create_post = (req, res, next) => {
    const company = new Company(req.body);
    company.save()
        .then(newCompany => {
            req.newCompany = newCompany;
            next();
        })
        .catch(err => { req.error = err; next(); });
}

// Create a new employee
const employee_create_post = (req, res, next) => {
    req.body['resigned'] = req.body['resigned'] === 'on';
    if (req.body['startDate']) {
        req.body['startDate'] = new Date(req.body['startDate']);
    }
    const employee = new Employee(req.body);
    employee.save()
        // then add employee to the company
        .then(newEmp => Company.findByIdAndUpdate(
            req.body.company,
            { $push: { employees: newEmp._id } },
            { new: true }
        ).then(_ => next()))
        .catch(err => { req.error = err; next(); });
}

// Get a company by id
const company_get = (req, res, next) => {
    const id = req.params.id;
    Company.findById(id)
        .then(result => {
            req.company = result;
            next();
        })
        .catch(err => { req.error = err; next(); });
}

// Get an employee by id
const employee_get = async (req, res, next) => {
    const id = req.params.id;

    // check whether user is authenticated
    const { isAuthenticated, _ } = await checkUserAuthentication(req);

    // conditionally return information
    if (isAuthenticated) {
        // get all user information
        Employee.findById(id)
            .then(result => {
                req.employee = result;
                next();
            })
            .catch(err => { req.error = err; next(); });
    } else {
        // only return firstname and lastname
        Employee.findById(id)
            .then(result => {
                req.employee = { firstName: result?.firstName, lastName: result?.lastName };
                next();
            })
            .catch(err => { req.error = err; next(); });
    }
}

// Update a company by id
const company_update = (req, res, next) => {
    const id = req.params.id;
    Company.updateOne({ _id: id }, { $set: req.body })
        .then(result => {
            req.companyId = id;
            next();
        })
        .catch(err => { req.error = err; next(); });
}

// Update an employee by id
const employee_update = (req, res, next) => {
    const id = req.params.id;
    console.log("req.body: ", req.body);
    Employee.updateOne({ _id: id }, { $set: req.body })
        .then(result => {
            req.employeeId = id;
            next();
        })
        .catch(err => { req.error = err; next(); });
}


// Delete a company by id
const company_delete = (req, res, next) => {
    const id = req.params.id;
    Company.deleteOne({ _id: id })
        .then(result => { next(); })
        .catch(err => { req.error = err; next(); });
}

// Delete an employee by id
const employee_delete = (req, res, next) => {
    const id = req.params.id;
    Employee.deleteOne({ _id: id })
        .then(result => { next(); })
        .catch(err => { req.error = err; next(); });
}

// Get all companies
const company_get_all = (req, res, next) => {
    Company.find()
        .then(result => {
            req.companies = result;
            next();
        })
        .catch(err => { req.error = err; next(); });
}

// Get all employees
const employee_get_all = async (req, res, next) => {
    Employee.find()
        .then(result => {
            req.employees = result;
            next();
        })
        .catch(err => { req.error = err; next(); });
}

// Get all employees of a company
const employee_get_company = async (req, res, next) => {
    const companyId = req.params.id;

    // check whether user is authenticated
    const { isAuthenticated, result: user } = await checkUserAuthentication(req);

    // check logged in user is from a company or not
    if (isAuthenticated && (user?.company?._id.toString() === companyId) && (companyId !== null)) {
        Employee.find({ company: companyId })
            .then(result => {
                req.employees = result;
                next();
            })
            .catch(err => { req.error = err; next(); });
    } else {
        req.employees = {};
        next();
    }
}

// helper functions
const decodeToken = (token) => {
    try {
        return jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
        console.error(err);
        return null;
    }
}

const checkUserAuthentication = async (req) => {
    let isAuthenticated = false;
    let result = null;

    if (req?.cookies?.token) {
        const decodedToken = decodeToken(req.cookies.token);
        if (decodedToken) {
            const user = await User.findById(decodedToken.userId).populate('company');
            if (user) {
                result = user;
                isAuthenticated = true;
            }
        }
    }

    return { isAuthenticated, result };
};


module.exports = {
    handleCompanyPage,
    handleEmployeePage,
    handleCompanyCreation,
    handleCompanyGet,
    handleEmployeeCreation,
    handleEmployeeGet,
    handleCompanyDelete,
    handleEmployeeDelete,
    handleCompanyPatch,
    handleEmployeePatch,
    company_create_post,
    employee_create_post,
    company_get,
    employee_get,
    company_update,
    employee_update,
    company_delete,
    employee_delete,
    company_get_all,
    employee_get_all,
    employee_get_company
}