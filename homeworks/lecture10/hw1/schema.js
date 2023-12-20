const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// 先定义 EmployeeSchema，因为 CompanySchema 会用到它
const EmployeeSchema = new Schema({
    firstName: String,
    lastName: String,
    company: { type: Schema.Types.ObjectId, ref: 'Company' }, // 引用 Company 模型
    startDate: Date,
    jobTitle: String,
    resigned: Boolean,
    salary: Number,
    manager: { type: Schema.Types.ObjectId, ref: 'Employee', default: null }, // 自引用，可选
});

const CompanySchema = new Schema({
    name: String,
    description: String,
    headquarters: String,
    industry: String,
    _employees: [{ type: Schema.Types.ObjectId, ref: 'Employee' }] // 引用 Employee 模型
});

// 创建模型
const Company = mongoose.model('Company', CompanySchema);
const Employee = mongoose.model('Employee', EmployeeSchema);

// 导出模型
module.exports = { Company, Employee };