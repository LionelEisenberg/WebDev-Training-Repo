var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("home");
 });

app.get("/filw/:thing", function(req, res) {
    var thing = req.params.thing;
    res.render("love", {thingVar: thing});
})

app.get("/posts", function(req,res) {
    var posts = [
        {title: "post 1", author: "suzy"},
        {title: "post 2", author: "suzay"},
        {title: "post 3", author: "suzzay"}
    ]
    res.render("posts", {posts: posts});
})

app.listen(3000);
