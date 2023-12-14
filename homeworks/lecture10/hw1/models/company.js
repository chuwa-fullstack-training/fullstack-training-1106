const mongoose = require("mongoose");

const companySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  headquarters: {
    type: String,
    required: true,
  },
  industry: {
    type: String,
    required: true,
  },
  _employees: [
    {
      type: Schema.Types.ObjectId,
      ref: "Employee",
    },
  ],
});

const Company = mongoose.model("Company", companySchema);

module.exports = Company;
