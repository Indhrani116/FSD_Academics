const express = require("express");

const deleteApp = express();

let bookRecords = [
    {
        id: 1,
        title: "Java",
        author: "James"
    },
    {
        id: 2,
        title: "Python",
        author: "Guido"
    },
    {
        id: 3,
        title: "JavaScript",
        author: "Brendan"
    }
];


// Display all books
deleteApp.get("/books", function (listRequest, listResponse) {
    listResponse.json(bookRecords);
});


// Delete a book
deleteApp.delete("/books/:bookId", function (removeRequest, removeResponse) {

    const requestedBookId = Number(removeRequest.params.bookId);

    const bookIndexPosition = bookRecords.findIndex(
        function (bookEntry) {
            return bookEntry.id === requestedBookId;
        }
    );

    if (bookIndexPosition === -1) {
        return removeResponse.status(404).json({
            message: "Book not found"
        });
    }

    bookRecords.splice(bookIndexPosition, 1);

    removeResponse.json({
        message: "Book deleted successfully"
    });
});


deleteApp.listen(3007, function () {
    console.log("Delete resource server running at http://localhost:3007");
});