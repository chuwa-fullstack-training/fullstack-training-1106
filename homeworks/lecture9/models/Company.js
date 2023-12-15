const mongoose = require("mongoose");
const { Schema } = mongoose;

const companySchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  description: {
    type: String,
  },
  headquarters: {
    type: String,
  },
  industry: {
    type: String,
  },
  _employees: [
    {
      type: Schema.Types.ObjectId,
      ref: "Employee",
    },
  ],
});

const companyModel = mongoose.model("Company", companySchema);
module.exports = companyModel;
