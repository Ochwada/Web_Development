const express = require('express');
const https = require('node:https'); // Native Node modules, no need to install
const bodyParser = require('body-parser');


const app = express();

/* -- Have the app use the body-parser -- */

app.use(bodyParser.urlencoded({
    extended: true
}));

/* --------    Web pages     ---------------*/



app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
    //res.send("Server is up and running")
});
/* --- catch the html form ----*/

app.post('/', (req, res) => {

    const query = req.body.cityName
    const apiKey = "fd88392e09391d414afd29129da77337"
    const units = "metric"
    const urlLink = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&unit=" + units;

    https.get(urlLink, (response) => {
        console.log(response.statusCode);

        response.on('data', (data) => {
            //         // convert the data to JSON

            const weatherData = JSON.parse(data)
            const temp = Math.floor(weatherData.main.temp - 273.15)
            const descOfData = weatherData.weather[0].description
            const icon = "http://openweathermap.org/img/wn/" + weatherData.weather[0].icon + "@2x.png"


            res.write("<h3>  The weather is currently- " + descOfData + "</h3>")
            res.write("<h1> and Its now " + temp + " degrees in " + weatherData.name + ".</h1 >")
            res.write("<img src ='" + icon + "'/>")
            res.send();          //console.log(descOfData);
        });
    });
});
    /* ---------------             ---------------*/

    app.listen(3000, function () {
        console.log("server is running on port 3000")
    });

//res.sendFile( __dirname + '/index.html');

// https.get(urlLink, (response) => {
//     console.log(response.statusCode);

//     response.on('data', (data) => {
//         // convert the data to JSON

//         const weatherData = JSON.parse(data)
//         // console.log(WeatherData);

//         /*  const objectMe = {
//              name: "Ochwada",
//              favoriteFood: "Ugali"
//          }
//          console.log(JSON.stringify(objectMe)) */

//         const temp = Math.floor(weatherData.main.temp - 273.15)
//         const descOfData = weatherData.weather[0].description
//         const icon = "http://openweathermap.org/img/wn/" + weatherData.weather[0].icon + "@2x.png"
// /*

//  */         res.write("<h3>  The weather is currently- " + descOfData + "</h3>")
//         res.write("<h1> and Its now " + temp + " degrees in " + weatherData.name + ".</h1 >")
//         res.write("<img src ='" + icon + "'/>")
//         res.send();          //console.log(descOfData);

//         // console.log("Its now " + temp + "° in " + weatherData.name );
//     });
// });
