const Employee = require('../models/employeeModel')
const asyncHandler = require('express-async-handler')


//@Fetch All Employee - @GET /api/employee/:id - @private
const fetchEmployees = asyncHandler(async (req,res) => {
    const employee = await Employee.find()

    console.log(employee)
    res.status(200).json(employee)
})

//@Fetch Employee - @GET /api/employee/:id - @private
const fetchEmployee = asyncHandler(async (req,res) => {
    const employee = await Employee.findById(req.params.id)

    if(!employee){
        res.status(400)
        throw new Error('employee not found')
    }

    res.status(200).json(employee)
})

//@Create Employee - @POST /api/employee - @private
const createEmployee = asyncHandler(async (req,res) => {
    const {
        firstName,
        lastName,
        email,
        contactNo,
        jobTitle,
        company,
        department,
        hireDate,
        leaveDate,
    } = req.body

    if (!firstName || !lastName || !email || !contactNo || !jobTitle || !company || !department || !hireDate) {
        res.status(400)
        throw new Error("Please add text on required fields")
    }
    

    const employee = await Employee.create({
        firstName,
        lastName,
        email,
        contactNo,
        jobTitle,
        company,
        department,
        hireDate,
        leaveDate,
    })
    res.json(employee)
    // if (employee) {
    //     res.status(200).json(employee)
    // }
})

//@Update Employee - @PUT /api/employee/:id - @private
const updateEmployee = asyncHandler(async (req,res) => {
    const employee = await Employee.findById(req.params.id)
 
    if(!employee){
        res.status(400)
        throw new Error('employee not found')
    }

    const {
        firstName,
        lastName,
        email,
        contactNo,
        jobTitle,
        company,
        department,
        hireDate,
    } = req.body

    if (!firstName || !lastName || !email || !contactNo || !jobTitle || !company || !department || !hireDate) {
        res.status(400)
        throw new Error("Please add text on required fields")
    }

    const updatedEmployee = await Employee.findByIdAndUpdate(req.params.id, req.body, {new: true})

    res.status(200).json(updatedEmployee)
})

const deleteEmployee = asyncHandler(async (req,res) => {
    const employee = await Employee.findById(req.params.id)

    if (!employee) {
        res.status(400)
        throw new Error('employee not found')
    }

   await employee.remove()

    res.status(200).json({id: req.params.id})
})

module.exports = {
    createEmployee,
    updateEmployee,
    fetchEmployee,
    fetchEmployees,
    deleteEmployee
}