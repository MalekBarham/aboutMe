'use strict'
let userName=prompt("can you tell us about your name ?");
alert(  userName      +    "welcome to our website"  );


// gessing game 

let favouritecolor=prompt(" is my favourite  color is red? (Yes-no)");
let meal=prompt("Is Mansaf my favorite meal?(Yes-no)");
let answer2=prompt(" Did i study accounting  ? (Yes-no) ");
let answer3=prompt(" is my favorit color is red ? (Yes-no)");
let q5=prompt(" did you like my website? (Yes-no)");

if (favouritecolor.toUpperCase()=="YES" || favouritecolor.toUpperCase() =="Y" ) {
    console.log("Thats Correct answer");
}
else if (favouritecolor.toLowerCase()=="no" || favouritecolor.toLowerCase()=="n") {
    console.log("you don't get the answer correctly");
}
else {
    alert("wrong input, please try agin");
}


if (meal.toUpperCase() =="YES"     || meal.toLowerCase()=="Y"   ) {
    console.log("thats correct answer");
}
else if (meal.toLowerCase()=="no"  || meal.toLowerCase()=="n"   ) {
    console.log("you don't get the answer correctly");
} else {
    alert("wrong input, please try again");
}

if (answer2.toUpperCase()=="YES" || answer2.toUpperCase()=="Y"){
console.log("Thats Correct answer");
} else if (answer2.toLowerCase()=="no" ||answer2.toLowerCase()=="n") {  
    console.log("you don't get the answer correctly");
} else { 
alert("wrong input,please try again");
}

if (answer3.toUpperCase()=="YES" ||  answer3.toUpperCase()=="Y") {
    console.log ("Thats correct answer"); 
} else if (answer3.toLowerCase()=="no"  || answer3.toLowerCase()=="n") {
    console.log("you don't get the answer correctly");
} else {
    alert("Wrong input,please try again");
}

if (q5.toUpperCase()=="YES" || q5.toUpperCase()=="Y" ) {
    console.log("Thats Correct answer");
}
else if (q5.toLowerCase()=="no" || q5.toLowerCase()=="n") {
    console.log("you don't get the answer correctly");
}
else {
    alert("wrong input, please try agin");
}
document.write( favouritecolor ,  meal  , answer2  ,  answer3  ,  q5   ,     ("this is your answer"));
