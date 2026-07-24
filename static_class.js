"use strict";
class CollegeStudent {
    studentPersonName;
    studentRollNumber;
    static collegeTitle = "Shri Vishnu Engineering College for Women";
    constructor(personNameValue, rollNumberValue) {
        this.studentPersonName = personNameValue;
        this.studentRollNumber = rollNumberValue;
    }
    displayStudentInfo() {
        console.log(`Student Name: ${this.studentPersonName}`);
        console.log(`Roll Number: ${this.studentRollNumber}`);
    }
    static displayCollegeName() {
        console.log(`College Name: ${CollegeStudent.collegeTitle}`);
    }
}
let firstStudent = new CollegeStudent("Indhrani", 101);
CollegeStudent.displayCollegeName();
firstStudent.displayStudentInfo();
