// let factorial = 1;
// for (i=1; i<=5; i++){

//      factorial = factorial*i;
//      console.log(i,factorial);
// }

// function fact (num){
//     let fact = 1
//     for (i=1;i<=num;i++){
//         // console.log(i);
//         fact = fact *i;
//     } 
//     return fact
// }

// let x = fact (10);
// console.log(x);


// let fibo = [0,1]

// for (i=2; i<=10; i++){
//     fibo[i] = fibo[i-1] + fibo[i-2]

// }
// console.log(fibo);

function fiboo(n)
{
    if (n===0){
        return 0
    } if( n===1 ){
        return 1
    } else {
        return fiboo(n-1)+ fiboo (n-2) 
    }
}
let x = fiboo(10)
console.log(x);

