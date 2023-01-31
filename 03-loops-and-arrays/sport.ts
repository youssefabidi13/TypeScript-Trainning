let sportOne: String[] = ["Golf","Cricket","futbol","Swimming"];

for(let i=0;i<sportOne.length;i++){
    console.log(sportOne[i]);
}

sportOne.push("Tennis");
sportOne.push("BascketBall")

//let's use the simplified for loop
console.log("le tableau apres push");

for(let tempSport of sportOne){
    console.log(tempSport);
}