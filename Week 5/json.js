const express = require("express");

const jsonApp = express();

jsonApp.use(express.json());


// Send JSON
jsonApp.get("/student", function (sendRequest, sendResponse) {

    const studentInformation = {
        id: 101,
        name: "Indhrani",
        course: "AI-DS"
    };

    sendResponse.json(studentInformation);
});


// Receive JSON
jsonApp.post("/student", function (receiveRequest, receiveResponse) {

    const receivedStudentData = receiveRequest.body;

    receiveResponse.json({
        message: "JSON received successfully",
        data: receivedStudentData
    });
});


jsonApp.listen(3006, function () {
    console.log("JSON server running at http://localhost:3006");
});