var express = require("express");
var bodyParser = require("body-parser")
var app = express();

var friends = ["Tony", "Miranda", "Justin", "Pierre", "Lilly"   ]

app.use(bodyParser.urlencoded({extended: true}))

app.get("/", function(req, res) {
    res.render("home")
})

app.post("/addfriend", function(req, res) {
    var newFriend = req.body.newFriend
    friends.push(newFriend)
    res.redirect("/friends")
})

app.get("/friends", function(req, res) {
    res.render("friends", {friends: friends})
})


app.set("view engine", "ejs");

app.listen(3000);
