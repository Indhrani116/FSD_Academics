"use strict";
class StudentRecord {
    studentUniqueId;
    studentFullName;
    studentBranch;
    constructor(uniqueIdValue, fullNameValue, branchValue) {
        this.studentUniqueId = uniqueIdValue;
        this.studentFullName = fullNameValue;
        this.studentBranch = branchValue;
    }
    displayStudentRecord() {
        console.log("Student Details");
        console.log(`Student ID: ${this.studentUniqueId}`);
        console.log(`Student Name: ${this.studentFullName}`);
        console.log(`Branch: ${this.studentBranch}`);
    }
}
let studentInformation = new StudentRecord(101, "Indhrani", "Artificial Intelligence and Data Science");
studentInformation.displayStudentRecord();
// ❌ Not Allowed
// studentInformation.studentUniqueId = 202;
