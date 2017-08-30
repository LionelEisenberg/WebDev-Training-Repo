function average(arr) {
    var count = 0;
    var total = 0;
    arr.forEach(function(piece) {
        total+=piece;
        count++
    })

    return Math.round(total / count);
}
console.log("Average score for environment science");
var scores = [90, 98, 89, 100, 100, 86, 94];
console.log(average(scores)); //should return 94

console.log("Average score for organic chemistry");
var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
console.log(average(scores2)); //should return 68
