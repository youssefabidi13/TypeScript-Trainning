var sportOne = ["Golf", "Cricket", "futbol", "Swimming"];
for (var i = 0; i < sportOne.length; i++) {
    console.log(sportOne[i]);
}
sportOne.push("Tennis");
sportOne.push("BascketBall");
//let's use the simplified for loop
console.log("le tableau apres push");
for (var _i = 0, sportOne_1 = sportOne; _i < sportOne_1.length; _i++) {
    var tempSport = sportOne_1[_i];
    console.log(tempSport);
}
