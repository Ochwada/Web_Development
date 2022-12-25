const express = require('express');
const app = express();


// ---------START  pages -------------
app.get("/", function(request, response){
    //console.log(request);
    response.send("<h2> Hello World !</h2>")
});

app.get("/contact", function(request, response){
    response.send("contact me at @ochwada")
});


app.get("/about", function(request, response){
    response.send(" My Name is <strong> Linda Ochwada </strong>. <br/> I like traveling and am learning coding")
})
// ----------- end of pages -----------

app.listen(3000, function() {
    console.log('Server started on port 3000')
});

