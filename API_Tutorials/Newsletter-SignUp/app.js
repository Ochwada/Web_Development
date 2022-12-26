
const express = require("express");
const bodyParser = require("body-parser");


const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

app.post("/", (req, res) => {
    res.send("Hey am working");
});
/* --------    Web pages     ---------------*/


app.listen(3000, function () {
    console.log("Server running on Port 3000")
});