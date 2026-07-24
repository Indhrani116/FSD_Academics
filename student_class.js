"use strict";
class StudentProfile {
    studentFullName;
    studentRollId;
    studentDepartment;
    constructor(fullName, rollId, departmentName) {
        this.studentFullName = fullName;
        this.studentRollId = rollId;
        this.studentDepartment = departmentName;
    }
    displayStudentInformation() {
        console.log("Student Details");
        console.log(`Name: ${this.studentFullName}`);
        console.log(`Roll Number: ${this.studentRollId}`);
        console.log(`Department: ${this.studentDepartment}`);
    }
}
let studentRecord = new StudentProfile("Indhrani", 101, "Artificial Intelligence and Data Science");
studentRecord.displayStudentInformation();
