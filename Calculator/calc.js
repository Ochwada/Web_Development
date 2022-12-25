
const express = require('express');
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));

// ---------- START Pages ----------------->
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});



app.post('/', (req, res) => {

    //console.log(req.body.num1);

    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    var result = num1 + num2;
    res.send("The result of the Calculation is: " + result);
})

// ----------End Pages ----------------->

app.listen(3000, function () {
    console.log('Server started on port 3000');
})