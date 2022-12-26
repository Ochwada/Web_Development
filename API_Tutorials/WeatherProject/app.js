const express = require('express');
const https = require('node:https'); // Native Node modules, no need to install



const app = express();

/* --------    Web pages     ---------------*/

app.get('/', (req, res) => {
    var urlLink = "https://api.openweathermap.org/data/2.5/weather?q=Spandau,%20Berlin&appid=fd88392e09391d414afd29129da77337&unit=metric"
    
    https.get(urlLink, (response) => {
        console.log(response.statusCode);
    });

    res.send("Server is up and running")
});

/* ---------------             ---------------*/


app.listen(3000, function () {
    console.log("server is running on port 3000")
});