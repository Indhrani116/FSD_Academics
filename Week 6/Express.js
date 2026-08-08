const express = require("express");

const app = express();

const studentRoutes = require("./routes");

app.use("/students", studentRoutes);

app.listen(3000, function () {
    console.log("Server started at http://localhost:3000");
});