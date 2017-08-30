var express = require("express");
var app = express();

app.get("/", function(req, res) {
    res.send("Hi there, welcome to my assignment")
})

app.get("/speak/:animal", function(req, res) {
    var animal = req.params.animal;
    var sound;
    switch (animal) {
        case "pig":
            sound = "Oink";
            break;
        case "dog":
            sound = "Woof Woof";
            break;
        case "cow":
            sound = "Moo";
            break;
        default:

    }
    res.send("the " + animal + " says '" + sound + "'");
})

app.get("/repeat/:word/:count", function(req, res) {
    var count = req.params.count;
    var word = req.params.word;
    var msg = "";
    for(var i = 0; i < count; i++) {
        msg+= " " + word;
    }
    res.send(msg);
})

app.get("*", function(req, res) {
    res.send("sorry, page not found... what are you doing with your life??")
})

app.listen(3000, console.log("Server running on 3000"));
