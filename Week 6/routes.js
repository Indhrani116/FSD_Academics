const express = require("express");

const studentRouter = express.Router();


// GET route
studentRouter.get("/", function (getRequest, getResponse) {
    getResponse.send("GET route is working");
});


// POST route
studentRouter.post("/", function (postRequest, postResponse) {
    postResponse.send("POST route is working");
});


// PUT route
studentRouter.put("/", function (putRequest, putResponse) {
    putResponse.send("PUT route is working");
});


// DELETE route
studentRouter.delete("/", function (deleteRequest, deleteResponse) {
    deleteResponse.send("DELETE route is working");
});


module.exports = studentRouter;