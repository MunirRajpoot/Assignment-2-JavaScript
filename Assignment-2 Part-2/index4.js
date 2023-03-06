// 4. Write a js program to find maximum and minimum element in an array.
// Find Max Number
// let rollNumbers = [45,678,5566,-9983,786] ;
// let maximum = Number.MIN_SAFE_INTEGER ;
// for(let i = 0 ;i < rollNumbers.length ;i++){
//     if(maximum < rollNumbers[i]){
//         maximum= rollNumbers[i]

//     }
// }
// console.log(maximum);


// Find Min Number
let age = [45,678,5566,-9983,786] ;
let minimum = Number.MAX_SAFE_INTEGER ;
for(let i = 0 ;i < age.length ;i++){
    if(minimum > age[i]){
        minimum= age[i]

    }
}
console.log(minimum)