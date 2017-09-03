var express = require("express");
var app = express();

app.get("/", function(req, res) {
    res.render("home.ejs");
 });

app.get("/filw/:thing", function(req, res) {
    var thing = req.params.thing;
    res.render("love.ejs", {thingVar: thing});
})

app.get("/posts", function(req,res) {
    var posts = [
        {title: "post 1", author: "suzy"},
        {title: "post 2", author: "suzay"},
        {title: "post 3", author: "suzzay"}
    ]
    res.render("posts.ejs", {posts: posts});
})

app.listen(3000);
