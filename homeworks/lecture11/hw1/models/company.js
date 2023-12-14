const mongoose = require('mongoose');
const { Schema } = mongoose;

const companySchema = new Schema({
  name: String,
  description: String,
  headquarters: String,
  industry: String,
  employees: [{
    type: Schema.Types.ObjectId,
    ref: 'Employee'
  }]
});

const Company = mongoose.model("Company", companySchema);

module.exports = Company;