const express = require("express");

const queryApp = express();


// Route parameter + Query parameter
queryApp.get("/student/:studentId", function (studentRequest, studentResponse) {

    // Route parameter
    const selectedStudentId = studentRequest.params.studentId;

    // Query parameters
    const selectedCourse = studentRequest.query.course;
    const selectedYear = studentRequest.query.year;

    studentResponse.send(
        "Student ID: " + selectedStudentId +
        "<br>Course: " + selectedCourse +
        "<br>Year: " + selectedYear
    );
});


queryApp.listen(4000, function () {
    console.log("Server running at http://localhost:4000");
});