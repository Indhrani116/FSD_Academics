const express = require("express");

const crudApp = express();

crudApp.use(express.json());


// GET
crudApp.get("/books", function (getRequest, getResponse) {
    getResponse.json({
        message: "GET request successful",
        books: ["Java", "Python", "JavaScript"]
    });
});


// POST
crudApp.post("/books", function (postRequest, postResponse) {
    postResponse.json({
        message: "POST request successful",
        receivedBook: postRequest.body
    });
});


// PUT
crudApp.put("/books/:bookId", function (putRequest, putResponse) {
    const selectedBookId = putRequest.params.bookId;

    putResponse.json({
        message: "PUT request successful",
        bookId: selectedBookId,
        updatedBook: putRequest.body
    });
});


// DELETE
crudApp.delete("/books/:bookId", function (deleteRequest, deleteResponse) {
    const removedBookId = deleteRequest.params.bookId;

    deleteResponse.json({
        message: "DELETE request successful",
        deletedBookId: removedBookId
    });
});


crudApp.listen(3005, function () {
    console.log("CRUD server running at http://localhost:3005");
});