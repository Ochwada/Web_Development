/* --------     -----------  ----------         ---------*/
/* --------     -----------  ----------         ---------*/
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("node:https");

const app = express();

app.use(express.static("public")); // read the public folder the css and images are

app.use(bodyParser.urlencoded({
    extended: true
}));

/* --------     -----------  ----------         ---------*/
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/signup.html')
})
/* --------    Web pages     ---------------*/

/* --------   Post Route    ---------------*/

app.post('/', (req, res) => {
    const firstName = req.body.fname;
    const lastName = req.body.lname;
    const email = req.body.email;


    const data = {
        members: [{
            email_address: email,
            status: "subscribed",
            merge_fields:{
                FNAME: firstName,
                LNAME: lastName
            }
        }]
    };
    
    const jsonData = JSON.stringify(data);
    const url = "https://us21.api.mailchimp.com/3.0/lists/b49332d0d4"


    // make request (with https module)
    https.request(url, options, (res) => {

    })
    //console.log(firstName, lastName, email)
});

// http://localhost:3000/

app.listen(3000, function () {
    console.log("Server running on Port 3000")
});

// API Key
// 4624d75cc4ff906cc7a23ff45918d926 - us21

// Audience ID- b49332d0d4