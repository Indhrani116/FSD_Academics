const express = require("express");

const middlewareApp = express();


// Custom middleware
function checkUserMiddleware(requestInfo, responseInfo, nextStep) {

    console.log("Custom middleware executed");

    nextStep();
}


// Use the middleware
middlewareApp.use(checkUserMiddleware);


// Route
middlewareApp.get("/home", function (homeRequest, homeResponse) {

    homeResponse.send("Welcome to the home page");
});


middlewareApp.listen(3008, function () {
    console.log("Middleware server running at http://localhost:3008");
});