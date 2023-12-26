const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
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

const UserSchema = new Schema({
    userName: String,
    password: String,
    company: String
});

UserSchema.pre('save', function(next) {
    if (this.isModified('password')) {
        this.password = bcrypt.hashSync(this.password, 10);
    }
    next();
});

// 创建模型
const Company = mongoose.model('Company', CompanySchema, 'company');
const Employee = mongoose.model('Employee', EmployeeSchema, 'employee');
const User = mongoose.model('User', UserSchema, 'user');
// 导出模型
module.exports = { Company, Employee, User };