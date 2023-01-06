
// ----- packages ---- 

const express = require('express');
const bodyParser = require('body-parser');


const app = express();

app.set('view engine', 'ejs');
// --------------------




app.get('/', (req, res) => {
    
    //res.sendFile( __dirname + '/index.html');
    var today = new Date();
    var currentDate = today.getTime();
    var day = "";

    if (currentDate === 6 || currentDate === 0){
        day = "weekend";
        //res.write("its weekend");
    }else{
        day = "weekday";
        //res.sendFile(__dirname + '/index.html');
    }
    res.render("list", { kindOfDay: day }) // "list" is an ejs file from view directory
        
});






// PORT
// http://localhost:3000/
const port = 3000;

app.listen(port, () =>
    console.log('Server started on port ' + port));