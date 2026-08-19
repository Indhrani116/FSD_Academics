const express = require("express");

const app = express();
const port = 3000;

// Configure EJS template engine
app.set("view engine", "ejs");

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Home route
app.get("/", (req, res) => {
    res.render("index", {
        title: "User Registration",
        error: null,
        user: null
    });
});

// Accept form inputs
// Accept form inputs and perform basic validation
app.post("/register", (req, res) => {
    const { username, age } = req.body;

    let errorMessage = null;

    // Validate username
    if (!username || username.length < 3) {
        errorMessage = "Username must be at least 3 characters long.";
    }
    // Validate age
    else if (!age || age < 18) {
        errorMessage = "You must be at least 18 years old.";
    }

    if (errorMessage) {
        // Validation failed
        res.render("index", {
            title: "Registration Failed",
            error: errorMessage,
            user: null
        });
    } else {
        // Validation passed
        res.render("index", {
            title: "Registration Successful",
            error: null,
            user: username
        });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});