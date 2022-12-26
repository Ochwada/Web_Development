const express = require('express');
const https = require('node:https'); // Native Node modules, no need to install



const app = express();

/* --------    Web pages     ---------------*/



app.get('/', (req, res) => {

    //res.sendFile( __dirname + '/index.html');

    var urlLink = "https://api.openweathermap.org/data/2.5/weather?q=Spandau,%20Berlin&appid=fd88392e09391d414afd29129da77337&unit=metric"

    https.get(urlLink, (response) => {
        console.log(response.statusCode);

        response.on('data', (data) => {
            // convert the data to JSON

            const weatherData = JSON.parse(data)
            // console.log(WeatherData);

            /*  const objectMe = {
                 name: "Ochwada",
                 favoriteFood: "Ugali"
             }
             console.log(JSON.stringify(objectMe)) */

            const temp = Math.floor(weatherData.main.temp - 273.15)
            const descOfData = weatherData.weather[0].description

/*             res.send("<h1>  The weather is currently- " + descOfData + "<br> and Its now " + temp + "° in " + weatherData.name + ".</h1>");
 */         res.write("<h3>  The weather is currently- " + descOfData + "</h3>")
            res.write("<h1> and Its now " + temp + " degrees in " + weatherData.name + ".</h1 >")
            res.send();          //console.log(descOfData);

            // console.log("Its now " + temp + "° in " + weatherData.name );
        });
    });

    //res.send("Server is up and running")
});

/* ---------------             ---------------*/


app.listen(3000, function () {
    console.log("server is running on port 3000")
});