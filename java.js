
'use strict'
let scoure = 0;
let userName=prompt('can you tell us about your name ?');
alert('welcome to our website ' + userName);
while (!userName) {
    userName=prompt('you cant leave this empty ');
    
}

let favColor=prompt(' is my favourite  color is black? \n (Yes-no)');
function yes(fQuestion) 
{  
    
    if ( favColor.toUpperCase()=='YES'||favColor.toUpperCase()=='Y' )
     {
        console.log("Thats Correct answer");
        alert('thats correct answer');
        scoure++;
    } 
     else 

    if (favColor.toLowerCase()=='no' || favColor.toLowerCase()=='n' ) 
    {
        console.log("you don't get the answer correctly");
        alert("wrong input");
         
    }
    else {
        alert("wrong input, please try again");
    }
   

}

yes(favColor);

// ======================================================

let favoriteMeal=prompt('Is Mansaf my favorite meal? \n (Yes-no)');
function yes1(fQuestion) 
{  

    if ( favoriteMeal.toUpperCase()=='YES' || favoriteMeal.toUpperCase()=='Y' )
     {
        console.log("Thats Correct answer");
        alert('thats correct answer');
        scoure++;
    } 
     else 

    if (favoriteMeal.toLowerCase()=='no' || favoriteMeal.toLowerCase()=='n' ) 
    {
        console.log("you don't get the answer correctly");
        alert("wrong input");
         
    }
    else {
        alert("wrong input, please try again");
    }
   

}

yes1(favoriteMeal);

//========================================================

let myStudy=prompt(' Did i study accounting  ?  \n (Yes-no)');

function yes2(fQuestion) 
{  

    
    if ( myStudy.toUpperCase()=='YES' ||  myStudy.toUpperCase()=='Y' )
     {
        console.log("Thats Correct answer");
        alert('thats correct answer');
        scoure++;
    } 
     else 

    if (myStudy.toLowerCase()=='no' || fmyStudy.toLowerCase()=='n' ) 
    {
        console.log("you don't get the answer correctly");
        alert("wrong input");
         
    }
    else {
        alert("wrong input, please try again");
    }

}


yes2(myStudy);


// ====================================



let favourietday=prompt('is my favorit day is thursday ?  \n (Yes-no)');

function yes3(fQuestion)
{

if (favourietday.toUpperCase()=='YES' ||  favourietday.toUpperCase()=='Y') {
    console.log ("Thats correct answer"); 
    alert('your answer is correct ');
    scoure++;

} else if (favourietday.toLowerCase()=='no'  || favourietday.toLowerCase()=='n') {
    console.log("you don't get the answer correctly");
    alert('your answer is not correct');
} else {
    alert("Wrong input,please try again");
    
}
}

yes3(favourietday);



//=================================================


let favourtCar= prompt(' do you think that bugatti is my favourt car \n (Yes-no) ' );

function yes4(fQuestion)
{
    if (favourtCar.toUpperCase()=='YES' || favourtCar.toUpperCase()=='Y' ) {
        console.log("Thats Correct answer");
        alert(" yes you should be !!!  ");
        scoure++;
    }
    else if (favourtCar.toLowerCase()=='no' || favourtCar.toLowerCase()=='n') {
        console.log("you don't get the answer correctly");
        alert(" wrong input,please try again ");
    }
    else {
        alert("wrong input, please try agin");
    }
}    

yes4(favourtCar);





//===================================================

let i=0;

for ( i = 0 ; i<4; i++)
{   

let putNumber = prompt('please try to guess  age');

function guessTrying(num)
{
  
     var x = function (m) {i=4};
    if (num>26)
    {
        alert ('your number is too high');
    }
    else if(num<26)
    {
        alert('your number is too small');
    }
    else
    if(num==26)
    {
        alert('bravo,you are awesome');
        score;
       x(i);
       
    }
   
}
guessTrying(putNumber);
}


if(i===4)
{
    alert('you are out of attempts the true age is 26 ');
    i=4;
}  



let city =['amman','damascus','cairo','aldouha' ];
let attempts=0;
for(attempts;attempts<6;attempts++)
{
let favcity = prompt( 'how about trying to guess my favourite city' );
function guessigCity(nameOfcity)
{
if( nameOfcity.toLowerCase()==city[0] || nameOfcity.toLowerCase()==city[1] || nameOfcity.toLowerCase()==city[2] || nameOfcity.toLowerCase()==city[3]  )
{
    alert('bravo ,these are my fav city');
    for(let i =0;i<city.length;i++)
    {
    alert(city[i] );
    }
    score++;
    
    attempts=6;
}
else
{
    alert('that is wrong try again');
}

}


guessigCity(favcity);

    
}

if(attempts===6)
{
    alert('you are out of attempts my favourite citys are ');
    
    for(let i =0;i<city.length;i++)
    {
    alert(city[i] );
    }
}


alert('your score is ' + score);


//=================================================

/*let favColor=prompt(' is my favourite  color is black? \n (Yes-no)');
if (favColor.toUpperCase()=='YES'     || favColor.toUpperCase()=='Y'   ) {
    console.log("Thats Correct answer");
    alert('thats correct answer');
    scoure++;
}
else if (favColor.toLowerCase()=='no' || favColor.toLowerCase()=='n') {
    console.log("you don't get the answer correctly");
}
else {
    alert("wrong input, please try agin");
}



let favoriteMeal=prompt('Is Mansaf my favorite meal? \n (Yes-no)');
if (favoriteMeal.toUpperCase()=='YES'     || favoriteMeal.toLowerCase()=='Y'   ) {
    console.log("thats correct answer");
    alert('thats correct answer');
    scoure++;
}
else if (favoriteMeal.toLowerCase()=='no'  || favoriteMeal.toLowerCase()=='n'   ) {
    console.log("you don't get the answer correctly");
        alert('thats correct answer');
} else {
    alert("wrong input, please try again");
}


let myStudy=prompt(' Did i study accounting  ?  \n (Yes-no)');

if (myStudy.toUpperCase()=='YES' || myStudy.toUpperCase()=='Y'){
console.log("Thats Correct answer");
alert('alert your answer is correct');
     scoure++;

} 
else if (myStudy.toLowerCase()=="no" || myStudy.toLowerCase()=="n") {  
    console.log("you don't get the answer correctly");
    alert('your answer is not correct ');
} else { 
alert("wrong input,please try again");
}




let favourietday=prompt('is my favorit day is thursday ?  \n (Yes-no)');

if (favourietday.toUpperCase()=='YES' ||  favourietday.toUpperCase()=='Y') {
    console.log ("Thats correct answer"); 
    alert('your answer is correct ');
    scoure++;

} else if (favourietday.toLowerCase()=='no'  || favourietday.toLowerCase()=='n') {
    console.log("you don't get the answer correctly");
    alert('your answer is not correct');
} else {
    alert("Wrong input,please try again");
    
}


let likeMywebsite=prompt(' did you like my website? \n (Yes-no) ' );

if (likeMywebsite.toUpperCase()=='YES' || likeMywebsite.toUpperCase()=='Y' ) {
    console.log("Thats Correct answer");
    alert(" yes you should be !!!  ");
    scoure++;
}
else if (likeMywebsite.toLowerCase()=='no' || likeMywebsite.toLowerCase()=='n') {
    console.log("you don't get the answer correctly");
    alert(" wrong input,please try again ");
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
        scoure++;
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




let City= ['amman' , 'damascus' , ' cairo ' , ' Aaldoha' ];
let i=0;

while (i < 6) {
    let favouriteCity=prompt('can you gusses my Favourite City?');
    if (favouriteCity.toLowerCase()=== City[0]  || favouriteCity.toLowerCase()=== City [1] || favouriteCity.toLowerCase()=== City[2]|| favouriteCity.toLowerCase()===City[3] )
     {
        alert('you gusses it right ');
        scoure++;
        break;
    }
     else
    {
         alert('thats is wrong !! try again ');
    i++
    }  
    if ( i===6 ) {
    alert(' you are out of try !! sorry , these are my favourite city ');

  for ( let i1= 0 ; i1 < City.length ; i1++) 
  {

    alert(City[i1]); 
   }
}}
alert('your scoure is ' + scoure );*/

















//========================================================================
// let favColor=prompt(' is my favourite  color is black? \n (Yes-no)');
// if (favColor.toUpperCase()=='YES'     || favColor.toUpperCase()=='Y'   ) {
//     console.log("Thats Correct answer");
//     alert('thats correct answer');
//     scoure++
// }
// else if (favColor.toLowerCase()=='no' || favColor.toLowerCase()=='n') {
//     console.log("you don't get the answer correctly");
// }
// else {
//     alert("wrong input, please try agin");
// }



// let favoriteMeal=prompt('Is Mansaf my favorite meal? \n (Yes-no)');
// if (favoriteMeal.toUpperCase()=='YES'     || favoriteMeal.toLowerCase()=='Y'   ) {
//     console.log("thats correct answer");
//     alert('thats correct answer');
//     scoure++
// }
// else if (favoriteMeal.toLowerCase()=='no'  || favoriteMeal.toLowerCase()=='n'   ) {
//     console.log("you don't get the answer correctly");
//         alert('thats correct answer');
// } else {
//     alert("wrong input, please try again");
// }


// let myStudy=prompt(' Did i study accounting  ?  \n (Yes-no)');

// if (myStudy.toUpperCase()=='YES' || myStudy.toUpperCase()=='Y'){
// console.log("Thats Correct answer");
// alert('alert your answer is correct');
//      scoure++

// } else if (myStudy.toLowerCase()=="no" || myStudy.toLowerCase()=="n") {  
//     console.log("you don't get the answer correctly");
//     alert('your answer is not correct ');
// } else { 
// alert("wrong input,please try again");
// }




// let favouriteColor=prompt('is my favorit color is black ?  \n (Yes-no)');

// if (favouriteColor.toUpperCase()=='YES' ||  favouriteColor.toUpperCase()=='Y') {
//     console.log ("Thats correct answer"); 
//     alert('your answer is correct ');
//     scoure++

// } else if (favouriteColor.toLowerCase()=='no'  || favouriteColor.toLowerCase()=='n') {
//     console.log("you don't get the answer correctly");
//     alert('your answer is not correct');
// } else {
//     alert("Wrong input,please try again");
    
// }


// let likeMywebsite=prompt(' did you like my website? \n (Yes-no) ' );

// if (likeMywebsite.toUpperCase()=='YES' || likeMywebsite.toUpperCase()=='Y' ) {
//     console.log("Thats Correct answer");
//     alert(" yes you should be !!!  ");
//     scoure++
// }
// else if (likeMywebsite.toLowerCase()=='no' || likeMywebsite.toLowerCase()=='n') {
//     console.log("you don't get the answer correctly");
//     alert(" wrong input,please try again ");
// }
// else {
//     alert("wrong input, please try agin");
// }


// let age;
// let counter = 0;
// let a = 0;

// do { 
//     age = parseInt(prompt("guess my age  you have five chanses "));

//     if (age===26) {
//         console.log("yor answer is correct ");
//         alert("your answer is correct");
//         a = 1;
//     } 
//      else if (age <26) {
//          alert("your answer is to low from the correct answer ");
//          counter +=1;
//      }
//     else if (age > 26) {
//         alert("your answer is to high from the correct answer");
//         counter +=1;
//     }  else {
//         alert("please enter a number");
//         counter +=1;
//     }
//     if (counter===4) {
//         alert("you toke all chansess to answer  -  the correct answer is 26");
//         a =1;
//     }
// } while (a === 0);








// let City= ['amman' , 'damascus' , ' cairo ' , ' Aaldoha' ];
// let i=0;

// while (i < 6) {
//     let favouriteCity=prompt('can you gusses my Favourite City?');
//     if (favouriteCity.toLowerCase()=== City[0]  || favouriteCity.toLowerCase()=== City [1] || favouriteCity.toLowerCase()=== City[2]|| favouriteCity.toLowerCase()===City[3] )
//      {
//         alert('you gusses it right ');
//         scoure = scoure+1
//         break;
//     }
//      else
//     { alert('thats is wrong !! try again ');
//     i++
// }  
// if ( i===6 ) {
//     alert(' you are out of try !! sorry ');

//   for ( i = 0 ; i < City.length ; i++) {

//     alert(city.length); }
// }}
// alert('your scoure is ' + scoure );



// let city =['amman','damascus','cairo','aldouha' ];
// let attempts=0;
// for(attempts;attempts<6;attempts++)
// {
// let favcity = prompt( 'how about trying to guess my favourite city' );
// function guessigCity(nameOfcity)
// {
// if( nameOfcity.toLowerCase()==city[0] || nameOfcity.toLowerCase()==city[1] || nameOfcity.toLowerCase()==city[2] || nameOfcity.toLowerCase()==city[3]  )
// {
//     alert('bravo ,these are my fav city');
//     for(let i =0;i<city.length;i++)
//     {
//     alert(city[i] );
//     }
//     score=score+1;
    
//     attempts=6;
// }
// else
// {
//     alert('that is wrong try again');
// }

// }


// guessigCity(favcity);

    
// }

// if(attempts===6)
// {
//     alert('you are out of attempts my favourite citys are ');
    
//     for(let i =0;i<city.length;i++)
//     {
//     alert(city[i] );
//     }
// }


// alert('your score is ' + score);


//=================================================

/*let favColor=prompt(' is my favourite  color is black? \n (Yes-no)');
if (favColor.toUpperCase()=='YES'     || favColor.toUpperCase()=='Y'   ) {
    console.log("Thats Correct answer");
    alert('thats correct answer');
    scoure++;
}
else if (favColor.toLowerCase()=='no' || favColor.toLowerCase()=='n') {
    console.log("you don't get the answer correctly");
}
else {
    alert("wrong input, please try agin");
}



let favoriteMeal=prompt('Is Mansaf my favorite meal? \n (Yes-no)');
if (favoriteMeal.toUpperCase()=='YES'     || favoriteMeal.toLowerCase()=='Y'   ) {
    console.log("thats correct answer");
    alert('thats correct answer');
    scoure++;
}
else if (favoriteMeal.toLowerCase()=='no'  || favoriteMeal.toLowerCase()=='n'   ) {
    console.log("you don't get the answer correctly");
        alert('thats correct answer');
} else {
    alert("wrong input, please try again");
}


let myStudy=prompt(' Did i study accounting  ?  \n (Yes-no)');

if (myStudy.toUpperCase()=='YES' || myStudy.toUpperCase()=='Y'){
console.log("Thats Correct answer");
alert('alert your answer is correct');
     scoure++;

} 
else if (myStudy.toLowerCase()=="no" || myStudy.toLowerCase()=="n") {  
    console.log("you don't get the answer correctly");
    alert('your answer is not correct ');
} else { 
alert("wrong input,please try again");
}




let favourietday=prompt('is my favorit day is thursday ?  \n (Yes-no)');

if (favourietday.toUpperCase()=='YES' ||  favourietday.toUpperCase()=='Y') {
    console.log ("Thats correct answer"); 
    alert('your answer is correct ');
    scoure++;

} else if (favourietday.toLowerCase()=='no'  || favourietday.toLowerCase()=='n') {
    console.log("you don't get the answer correctly");
    alert('your answer is not correct');
} else {
    alert("Wrong input,please try again");
    
}


let likeMywebsite=prompt(' did you like my website? \n (Yes-no) ' );

if (likeMywebsite.toUpperCase()=='YES' || likeMywebsite.toUpperCase()=='Y' ) {
    console.log("Thats Correct answer");
    alert(" yes you should be !!!  ");
    scoure++;
}
else if (likeMywebsite.toLowerCase()=='no' || likeMywebsite.toLowerCase()=='n') {
    console.log("you don't get the answer correctly");
    alert(" wrong input,please try again ");
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
        scoure++;
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




let City= ['amman' , 'damascus' , ' cairo ' , ' Aaldoha' ];
let i=0;

while (i < 6) {
    let favouriteCity=prompt('can you gusses my Favourite City?');
    if (favouriteCity.toLowerCase()=== City[0]  || favouriteCity.toLowerCase()=== City [1] || favouriteCity.toLowerCase()=== City[2]|| favouriteCity.toLowerCase()===City[3] )
     {
        alert('you gusses it right ');
        scoure++;
        break;
    }
     else
    {
         alert('thats is wrong !! try again ');
    i++
    }  
    if ( i===6 ) {
    alert(' you are out of try !! sorry , these are my favourite city ');

  for ( let i1= 0 ; i1 < City.length ; i1++) 
  {

    alert(City[i1]); 
   }
}}
alert('your scoure is ' + scoure );*/

















//========================================================================
// let favColor=prompt(' is my favourite  color is black? \n (Yes-no)');
// if (favColor.toUpperCase()=='YES'     || favColor.toUpperCase()=='Y'   ) {
//     console.log("Thats Correct answer");
//     alert('thats correct answer');
//     scoure++
// }
// else if (favColor.toLowerCase()=='no' || favColor.toLowerCase()=='n') {
//     console.log("you don't get the answer correctly");
// }
// else {
//     alert("wrong input, please try agin");
// }



// let favoriteMeal=prompt('Is Mansaf my favorite meal? \n (Yes-no)');
// if (favoriteMeal.toUpperCase()=='YES'     || favoriteMeal.toLowerCase()=='Y'   ) {
//     console.log("thats correct answer");
//     alert('thats correct answer');
//     scoure++
// }
// else if (favoriteMeal.toLowerCase()=='no'  || favoriteMeal.toLowerCase()=='n'   ) {
//     console.log("you don't get the answer correctly");
//         alert('thats correct answer');
// } else {
//     alert("wrong input, please try again");
// }


// let myStudy=prompt(' Did i study accounting  ?  \n (Yes-no)');

// if (myStudy.toUpperCase()=='YES' || myStudy.toUpperCase()=='Y'){
// console.log("Thats Correct answer");
// alert('alert your answer is correct');
//      scoure++

// } else if (myStudy.toLowerCase()=="no" || myStudy.toLowerCase()=="n") {  
//     console.log("you don't get the answer correctly");
//     alert('your answer is not correct ');
// } else { 
// alert("wrong input,please try again");
// }




// let favouriteColor=prompt('is my favorit color is black ?  \n (Yes-no)');

// if (favouriteColor.toUpperCase()=='YES' ||  favouriteColor.toUpperCase()=='Y') {
//     console.log ("Thats correct answer"); 
//     alert('your answer is correct ');
//     scoure++

// } else if (favouriteColor.toLowerCase()=='no'  || favouriteColor.toLowerCase()=='n') {
//     console.log("you don't get the answer correctly");
//     alert('your answer is not correct');
// } else {
//     alert("Wrong input,please try again");
    
// }


// let likeMywebsite=prompt(' did you like my website? \n (Yes-no) ' );

// if (likeMywebsite.toUpperCase()=='YES' || likeMywebsite.toUpperCase()=='Y' ) {
//     console.log("Thats Correct answer");
//     alert(" yes you should be !!!  ");
//     scoure++
// }
// else if (likeMywebsite.toLowerCase()=='no' || likeMywebsite.toLowerCase()=='n') {
//     console.log("you don't get the answer correctly");
//     alert(" wrong input,please try again ");
// }
// else {
//     alert("wrong input, please try agin");
// }


// let age;
// let counter = 0;
// let a = 0;

// do { 
//     age = parseInt(prompt("guess my age  you have five chanses "));

//     if (age===26) {
//         console.log("yor answer is correct ");
//         alert("your answer is correct");
//         a = 1;
//     } 
//      else if (age <26) {
//          alert("your answer is to low from the correct answer ");
//          counter +=1;
//      }
//     else if (age > 26) {
//         alert("your answer is to high from the correct answer");
//         counter +=1;
//     }  else {
//         alert("please enter a number");
//         counter +=1;
//     }
//     if (counter===4) {
//         alert("you toke all chansess to answer  -  the correct answer is 26");
//         a =1;
//     }
// } while (a === 0);








// let City= ['amman' , 'damascus' , ' cairo ' , ' Aaldoha' ];
// let i=0;

// while (i < 6) {
//     let favouriteCity=prompt('can you gusses my Favourite City?');
//     if (favouriteCity.toLowerCase()=== City[0]  || favouriteCity.toLowerCase()=== City [1] || favouriteCity.toLowerCase()=== City[2]|| favouriteCity.toLowerCase()===City[3] )
//      {
//         alert('you gusses it right ');
//         scoure = scoure+1
//         break;
//     }
//      else
//     { alert('thats is wrong !! try again ');
//     i++
// }  
// if ( i===6 ) {
//     alert(' you are out of try !! sorry ');

//   for ( i = 0 ; i < City.length ; i++) {

//     alert(city.length); }
// }}
// alert('your scoure is ' + scoure );
