var ray = [];
do {
    var uPrompt = prompt("What would you like to do?")
    if (uPrompt === null) {
        break;
    } else if (uPrompt === "new") {
        var item = prompt("What would you like to add?")
        ray.push(item);
    } else if (uPrompt === "list") {
        if (ray.length === 0 ) {
            console.log("Nothing to do!");
            continue;
        }
        console.log('****************')
        ray.forEach(function(listItms) {
            console.log(ray.indexOf(listItms) + ": " + listItms);
        });
        console.log('****************')
    } else if (uPrompt === "delete"){
        var index = prompt("what would you like to delete?");
        ray.splice(index, 1);
    } else if (uPrompt != "Quit"){
        alert("Not a valid request!");
    }
}
while (uPrompt != "Quit");
