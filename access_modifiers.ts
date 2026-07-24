class EmployeeProfile {

    public employeeName: string;
    private employeeSalary: number;
    protected employeeDepartment: string;

    constructor(
        employeeNameValue: string,
        employeeSalaryValue: number,
        employeeDepartmentValue: string
    ) {
        this.employeeName = employeeNameValue;
        this.employeeSalary = employeeSalaryValue;
        this.employeeDepartment = employeeDepartmentValue;
    }

    public displayEmployeeDetails(): void {
        console.log("Employee Details");
        console.log(`Employee Name: ${this.employeeName}`);
        console.log(`Employee Salary: ₹${this.employeeSalary}`);
        console.log(`Employee Department: ${this.employeeDepartment}`);
    }
}

class EmployeeChild extends EmployeeProfile {

    public displayDepartment(): void {
        console.log(`Employee Department: ${this.employeeDepartment}`);
    }
}

let employeeData = new EmployeeChild(
    "Indhrani",
    50000,
    "Artificial Intelligence and Data Science"
);

console.log(`Employee Name: ${employeeData.employeeName}`);

// ❌ Not Allowed
// console.log(employeeData.employeeSalary);

// ❌ Not Allowed
// console.log(employeeData.employeeDepartment);

employeeData.displayDepartment();
employeeData.displayEmployeeDetails();