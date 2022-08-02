const mongoose = require('mongoose')

const employeeSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'Add a firt name']
    },
    lastName: {
        type: String,
        required: [true, 'Add an email'],
    },
    email: {
        type: String,
        required: [true, 'Add a password']
    },
    contactNo: {
        type: String,
        required: [true, 'Add a password']
    },
    jobTitle: {
        type: String,
        required: [true, 'Add a password']
    },
    company: {
        type: String,
        required: [true, 'Add a password']
    },
    department: {
        type: String,
        required: [true, 'Add a password']
    },
    hireDate: {
        type: Date,
        required: [true, 'Add a password']
    },
    leaveDate: {
        type: Date,
    },
},{
    timestamps: true
})

module.exports = mongoose.model('employee', employeeSchema)