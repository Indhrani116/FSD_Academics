class CollegeStudent {

    studentPersonName: string;
    studentRollNumber: number;

    static collegeTitle: string = "Shri Vishnu Engineering College for Women";

    constructor(personNameValue: string, rollNumberValue: number) {
        this.studentPersonName = personNameValue;
        this.studentRollNumber = rollNumberValue;
    }

    public displayStudentInfo(): void {
        console.log(`Student Name: ${this.studentPersonName}`);
        console.log(`Roll Number: ${this.studentRollNumber}`);
    }

    static displayCollegeName(): void {
        console.log(`College Name: ${CollegeStudent.collegeTitle}`);
    }
}

let firstStudent = new CollegeStudent("Indhrani", 101);

CollegeStudent.displayCollegeName();
firstStudent.displayStudentInfo();