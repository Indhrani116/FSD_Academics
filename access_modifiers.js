"use strict";
class EmployeeProfile {
    employeeName;
    employeeSalary;
    employeeDepartment;
    constructor(employeeNameValue, employeeSalaryValue, employeeDepartmentValue) {
        this.employeeName = employeeNameValue;
        this.employeeSalary = employeeSalaryValue;
        this.employeeDepartment = employeeDepartmentValue;
    }
    displayEmployeeDetails() {
        console.log("Employee Details");
        console.log(`Employee Name: ${this.employeeName}`);
        console.log(`Employee Salary: ₹${this.employeeSalary}`);
        console.log(`Employee Department: ${this.employeeDepartment}`);
    }
}
class EmployeeChild extends EmployeeProfile {
    displayDepartment() {
        console.log(`Employee Department: ${this.employeeDepartment}`);
    }
}
let employeeData = new EmployeeChild("Indhrani", 50000, "Artificial Intelligence and Data Science");
console.log(`Employee Name: ${employeeData.employeeName}`);
// ❌ Not Allowed
// console.log(employeeData.employeeSalary);
// ❌ Not Allowed
// console.log(employeeData.employeeDepartment);
employeeData.displayDepartment();
employeeData.displayEmployeeDetails();
