const express = require('express');
const router = express.Router();

const employeeController = require('../controllers/getEmployees');
const employeeByIdController = require('../controllers/getEmployeesById');
const employeeByNameController = require('../controllers/getEmployeesByFirstName');


router.get('/employees', employeeController.getEmployees);
router.get('/employees/:emp_no', employeeByIdController.getEmployeesById);
router.get('/employees/firstname/:first_name', employeeByNameController.getEmployeesByFirstName);










module.exports = router;