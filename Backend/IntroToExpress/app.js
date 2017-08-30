var express = require("express");
var app = express();

app.get("/", function(request, response) {
    response.send("Hi There!");
});

app.get("/bye", function(req, res) {
    res.send("Bye!");
})

app.get("/dog", function(req, res) {
    res.send("MEOW")
})

app.listen(3000, console.log("server has started"));
