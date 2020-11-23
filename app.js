const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.send("it works!");
});

app.get("/mercury", function(req, res){
    res.render("mercury.html");
})

app.get("/venus", function(req, res){
    res.render("venus.html");
})

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Express server is running...");
});