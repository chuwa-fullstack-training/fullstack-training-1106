const mongoose = require('./connect');
const { Company} = require('./schema');

const createCompany = async (name,description,headquarters,industry) => {
    const company = new Company({
        name: name,
        description: description,
        headquarters: headquarters,
        industry: industry
      });
      
      let post = await company
                        .save()
                        .then(() => {
                        console.log('Company saved');
                        return ' Company added successfully'
                        })
                        .catch(err => {
                        console.log('Error', err);
                        });
        return post;
      
}
const getCompanyById = async (id) => {
    let company = 
        await Company.findById(id)
                    .then(com => {
                        console.log(com);
                        return com;
                    })
                    .catch(err => {
                        console.log('Error finding user', err);
                    });
    return company;
}
const updateCompanyById = async (id, args) => {
    let {description} = args;
    let resp = await Company.findByIdAndUpdate(id, {
        description: description
      })
        .then(() => {
          console.log('User updated');
          return 'Success';
        })
        .catch(err => {
          console.log('Error updating user', err);
        });
      return resp;
}
const deleteCompanyById = async (id) => {
    let resp = await Company.findByIdAndDelete(id)
        .then(res => {
            console.log('User deleted', res);
            return 'Deleted';
        })
        .catch(err => {
            console.log('Error deleting user', err);
        });
    return resp;
}

const getAllCompanies = async () => {
    let companies = await Company.find()
        .then(companies => {
            console.log(companies);
            return companies
        })
        .catch(err => {
            console.log('Error finding users', err);
        });
    return companies;
}


module.exports = {
    createCompany,
    getCompanyById,
    updateCompanyById,
    deleteCompanyById,
    getAllCompanies
}