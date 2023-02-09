

// // THIS FUNCTION WILL RETURN THOSE INPUT AND OUTPUT --> INPUT: 5 OUTPUT : 7.5

// function mindGame(positiveNumber) {
//   if (typeof positiveNumber !='number'){
//     return "Please provide a valid input"
//   }

//   let resultWithOperation = positiveNumber * 3;
//   let resultWithSum = resultWithOperation + 10;
//   let resultWithDivision = resultWithSum / 2;
//   let finallResult = resultWithDivision - 5;
//   return finallResult;
// }

// // THIS FUNCTION WILL RETURN EVEN OR ODD FROM ANY NAME OR CHARACTER  ACCORDING TO LENGTH.

// function evenOdd(character)
// {
//     if(typeof character != 'string'){
//         return 'Please provide a valid input'
//     }else if (character.length % 2 === 0 ){
//         return 'even'
//     } else{
//         return 'odd'
//     }
// }

// // THIS FUNCTION WILL RETURN DEFERENCE OF SEVEN IF THE VALUE LESS THEN SEVEN IT WILL MAKE IT DOUBLE.

// function isLGSeven (number){
//    if (typeof number !='number'){
//     return "Please provide a valid input"
//   } else if (number< 7){
//         let returnValue = number -7;
//         return returnValue

//     } else {
//         let anotherValue = number *2
//         return anotherValue
//     }
// }



// // THIS FUNCTION WILL RETURN THE TOTALLY NEGATIVE VALUE 

// function findingBadData(number){
//     let count =0;
//     for (i=0; i<number.length; i++){
//         let element = number[i]
       
//         if ( !Array.isArray(number) ){
//             return "Please provide a valid input"
//         }
        
//         else if(element<=0){
//             count = count+ 1;
//         } 
        
//     }
//     return count;
// }



// // THIS FUNCTION WILL RETURN TOTALL GEMS TO DIAMOND AND IF THE VALUE MORE THAN 2OOO IT WILL MINUS FROM 2000.

// function gemsToDiamond(friendOneGems, friendTwoGems, friendThreeGems) {
//   let  totallGems =friendOneGems * 21 + friendTwoGems * 32 + friendThreeGems * 43;

//   if (typeof friendOneGems !='number' || typeof friendTwoGems !='number' || typeof friendThreeGems !='number'){
//         return "Please provide a valid input"
//       }
//       else if (totallGems > 2000) {
//         return totallGems - 2000;
//       } else {
//         return totallGems;
//       }
// }


// function compare(a, b) {

//  if (a == b) {

//  return true;

//  } else {

//  return false;

//  }

// }

// const result = compare(15, "15");

// console.log(result);


function compare(a, b) {

  if (a.toString() === b) {
 
  return true;
 
  } else {
 
  return false;
 
  }
 
 }
 
 const result = compare(25, 25);
 
 console.log(result);
 console.log("123" + 123);
 
 