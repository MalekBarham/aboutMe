'use strict'

let userName=prompt('can you tell us about your name ?');
alert('welcome to our website ' + userName);
while (!userName) {
    userName=prompt('you cant leave this empty ');
    
}



let favouriteColor=prompt(' is my favourite  color is red? \n (Yes-no)');
let Meal=prompt('Is Mansaf my favorite meal? \n (Yes-no)');
let Answer2=prompt(' Did i study accounting  ?  \n (Yes-no)');
let Answer3=prompt('is my favorit color is red ?  \n (Yes-no)');
let Answer4=prompt(' did you like my website? \n (Yes-no) ' );






if (favouriteColor.toUpperCase()=='YES'     || favouriteColor.toUpperCase()=='Y'   ) {
    console.log("Thats Correct answer");
}
else if (favouriteColor.toLowerCase()=='no' || favouriteColor.toLowerCase()=='n') {
    console.log("you don't get the answer correctly");
}
else {
    alert("wrong input, please try agin");
}


if (Meal.toUpperCase()=='YES'     || Meal.toLowerCase()=='Y'   ) {
    console.log("thats correct answer");
}
else if (Meal.toLowerCase()=='no'  || Meal.toLowerCase()=='n'   ) {
    console.log("you don't get the answer correctly");
} else {
    alert("wrong input, please try again");
}

if (Answer2.toUpperCase()=='YES' || Answer2.toUpperCase()=='Y'){
console.log("Thats Correct answer");
} else if (Answer2.toLowerCase()=="no" || Answer2.toLowerCase()=="n") {  
    console.log("you don't get the answer correctly");
} else { 
alert("wrong input,please try again");
}

if (Answer3.toUpperCase()=='YES' ||  Answer3.toUpperCase()=='Y') {
    console.log ("Thats correct answer"); 
} else if (Answer3.toLowerCase()=="no"  || Answer3.toLowerCase()=="n") {
    console.log("you don't get the answer correctly");
} else {
    alert("Wrong input,please try again");
}

if (Answer4.toUpperCase()=='YES' || Answer4.toUpperCase()=='Y' ) {
    console.log("Thats Correct answer");
}
else if (Answer4.toLowerCase()=='no' || Answer4.toLowerCase()=='n') {
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
        alert("your answer is correct");
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





