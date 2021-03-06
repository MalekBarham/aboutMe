'use strict'


  
  let  City=['amman' ,  'damacus' , ' cairo ' ,' aldoha ' ];

let i = 0;
for ( i ; i < 6 ; i++) {
    let fs =prompt ('can you gusses my favourite City ?');
    
function favouriteCity(fv) {

    if (fs.toLowerCase()=== City[0]|| fs.toLowerCase() ===City[1] || fs.toLowerCase() === City[2] || fs.toLowerCase ()=== City[3] ) {
        alert('your gusses is right ');
        


    } else { 
        alert('your gusses is not right ');
        
    }     
    
}
favouriteCity(fs);

}
if (i === 6) {
    alert('you are out of try');
    
for ( let y  =  0 ;  y  < City.length ; y++ ) {
    alert(City[y]);
    
}
}





// let City= ['amman' , 'damascus' , ' cairo ' , ' Aldoha' ];
// let i=0;

// while (i < 6) {
//     let favouriteCity=prompt('can you gusses my Favourite City? \n amman -damascus - cairo - aldoha' );
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

//   for ( im = 0 ; im < City.length ; im++) {

  
//   alert(city[im]); }
// }
// }
// alert('Correct answers is , black , mansaf , accounting , coffe , age 26 , bugatti , ')
// alert( ' your scoure is '   +  scoure  +     ' out of 7 ' );

