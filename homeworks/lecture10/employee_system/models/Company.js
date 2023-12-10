const mongoose = require('mongoose');
const { Schema } = mongoose;

const companySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  headquarters: {
    type: String
  },
  industry: {
    type: String
  },
  employees: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Employee'
    }
  ]
});

const Company = mongoose.model('Company', companySchema);

module.exports = Company;
  
