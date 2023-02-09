// let number = [4,3,5,5,66,7,9,1,1,3,5,7,]

// let unique = [];

// for (i=0; i<number.length;i++){
//     let element =number[i]
//     let index = unique.indexOf(element)

//     // that means new index is -1.
//     if(index == -1){
//         unique.push(element)
//     }

    
// }
// console.log(unique);


// let spech = 'i am a good person. i will be a good developer.';

// let count = 0;
// for (i=0; i<spech.length; i++){
//     let character = spech[i]
//     console.log(character);
//     if (character == ' '){
//         count++
//     }
// }

// console.log(count);

let spech = 'hello bd ';
function reverse (str){
    let r = 0
    for (i=0; i<str.length; i++){
        let element = str[i]
        r = element + r;
        }
        return r 
}
let x = reverse(spech);
console.log(x);