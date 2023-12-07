const Company = require('..models/Company')

// Create a new company
const createCompany = async (req, res) => {
    try {
        const company = new Company(req.body);
        await company.save();
        res.status(201).json({ message: 'Company created'});
    } catch(err) {
        console.log(err.message);
        res.status(500).json({ message: 'Server Error'});
    }
}


// Get a company by id
const getOneCompany = async (req, res) => {
    try {
      const company = await Company.findById(req.params?.id);
      res.status(200).json(company);
    } catch (err) {
      res.status(500).json({ message: 'Server Error' });
    }
};



// Update a company by id
const updateCompany = async (req, res) => {
    try {
      const company = await Company.findById(req.params?.id);
      company.headquarters =  req.body.headquarters ?? company.headquarters;
      company.industry =  req.body.industry ?? company.industry;

      await company.save();
      res.json(company);
    } catch (err) {
      res.status(500).json({ message: 'Server Error' });
    }
};



// Delete a company by id
const deleteCompany = async (req, res) => {
    try {
      await Company.findByIdAndDelete(req.params?.id);
      res.status(204).json({ message: 'Company deleted' });
    } catch (err) {
      res.status(500).json({ message: 'Server Error' });
    }
};
  


// Get all companies
const getAllCompanies = async (req, res) => {
    try {
      const company = await Company.find();
      res.status(200).json(company);
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ message: 'Server Error' });
    }
};

module.exports = {
    createCompany,
    getOneCompany,
    updateCompany,
    deleteCompany,
    getAllCompanies
}
