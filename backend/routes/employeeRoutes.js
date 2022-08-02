const express = require('express')
const router = express.Router()
const {createEmployee, updateEmployee, fetchEmployee, fetchEmployees, deleteEmployee} = require('../controllers/employeeController')

const {protect} = require('../middleware/authMiddleware')


// api/employee
router.get('/', protect, fetchEmployees)
router.get('/:id', protect, fetchEmployee)
router.post('/', protect, createEmployee)
router.put('/:id', protect, updateEmployee)
router.delete('/:id', protect, deleteEmployee)



module.exports = router