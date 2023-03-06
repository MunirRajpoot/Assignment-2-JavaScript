// 18. Write a js program to search an element in an array.
function search(arr,element){
    for(let i = 0; i < arr.length ;i++){
        if(arr[i] == element){
        return true ;
        }
    }
    return false ;
}
const arr = [1,2,3,4,5,6]
console.log(search(arr,3));
