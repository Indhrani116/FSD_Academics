const express = require("express");

const loggingApp = express();


// Logging middleware
function requestLoggingMiddleware(requestData, responseData, nextAction) {

    console.log(
        "Method: " + requestData.method +
        " | URL: " + requestData.url
    );

    nextAction();
}


// Apply logging middleware
loggingApp.use(requestLoggingMiddleware);


// Routes
loggingApp.get("/", function (homeRequest, homeResponse) {
    homeResponse.send("Home page");
});

loggingApp.get("/about", function (aboutRequest, aboutResponse) {
    aboutResponse.send("About page");
});

loggingApp.get("/contact", function (contactRequest, contactResponse) {
    contactResponse.send("Contact page");
});


loggingApp.listen(3009, function () {
    console.log("Logging server running at http://localhost:3009");
});