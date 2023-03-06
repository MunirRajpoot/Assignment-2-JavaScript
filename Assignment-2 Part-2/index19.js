/*19. Write a js program to sort array elements in ascending or descending
order.*/
// // Assendings Methods
// let compare = (a,b)=>{
//     return a-b
// }
// let num = [985, -7845 , 24 , 499 ,] ;
// num.sort(compare)
// console.log(num);

// // Decendings Methods
let compare = (a,b)=>{
    return b-a
}
let num = [985, -7845 , 24 , 499 ,] ;
num.sort(compare)
console.log(num);