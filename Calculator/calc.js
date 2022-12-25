
const express = require('express');
const app = express();

// ---------- START Pages ----------------->
app.get('/', (req, res) => {
    res.send("<h1> Hello World!</h1>")
});
// ----------End Pages ----------------->

app.listen(3000, function(){
    console.log('Server started on port 3000');
})