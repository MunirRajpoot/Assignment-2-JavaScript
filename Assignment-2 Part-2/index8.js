// 8. Write a js program to copy all elements from an array to another array

let arr = [1,2.3,57]
let anotherArr = [] ;
for(let i = 0 ;i<arr.length ;i++){
    anotherArr.pop(arr[i])
}
 console.log(anotherArr);