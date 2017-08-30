var movies = [
    {title: "The Prestige", stars: 5, seen: true},
    {title: "Lucky Number Sleven", stars: 4.5, seen: false},
    {title: "fight club", stars: 2, seen: false}]

for (var i = 0; i < movies.length; i++) {
    var a = "you have ";
    if (!movies[i].seen) {
        a += "not ";
    }
    a += "seen \"" + movies[i].title + "\" - " + movies[i].stars + " stars";
    console.log(a);
}
