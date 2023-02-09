let markd =[12,34,56,78,90,3,333,]
let ar = 3;
let max = markd[0];
for (i=0;i<markd.length;i++){
    let element= markd[i]
    if (element> max){
        max= element
    }
}

console.log('max is' , max);
