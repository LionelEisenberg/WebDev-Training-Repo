var express = require("express");
var app = express();

app.get("/", function(req, res) {
    res.render("home.ejs");
 });

app.get("/filw/:thing", function(req, res) {
    var thing = req.params.thing;
    res.render("love.ejs", {thingVar: thing});
})

app.listen(3000);
