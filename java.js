'use strict'

let userName=prompt("can you tell us about your name ?");
alert( "welcome " + userName);
let favouritecolor=parseInt(prompt(" is my favourite  color is red? \n (Yes-no)"));
let meal=parseInt(prompt("Is Mansaf my favorite meal? \n (Yes-no)"));
let answer2=parseInt(prompt(" Did i study accounting  ?  \n (Yes-no) "));
let answer3=parseInt(prompt(" is my favorit color is red ?  \n (Yes-no)"));
let q5=parseInt(prompt(" did you like my website? \n (Yes-no)"));
let n1=parseInt(prompt("can you guess my name ? \n  [ Malek-Mohummad-Yahya-samer  ]"));





if (favouritecolor.toUpperCase()=="YES"     || favouritecolor.toLowerCase()=="Y"   ) {
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
let age;
let counter = 0;
let a = 0;

do { 
    age = parseInt(prompt("guess my age  you have five chanses "));

    if (age===26) {
        console.log("yor answer is correct ");
        alert("your answer is crrect");
        a = 1;
    } 
     else if (age <26) {
         alert("your answer is to low from the correct answer ");
         counter +=1;
     }
    else if (age > 26) {
        alert("your answer is to high from the correct answer");
        counter +=1;
    }  else {
        alert("please enter a number");
        counter +=1;
    }
    if (counter===4) {
        alert("you toke all chansess to answer  -  the correct answer is 26");
        a =1;
    }
} while (a === 0);


switch (n1) {
    case "yahya":
        console.log("this is wrong name");
        break;
     case "mouhmmed":
     console.log("this is wrong name");
     break;
     case "samer":
         console.log("please try again");
         break;
    default:
    console.log("this is correct answer");
        break;
} 
