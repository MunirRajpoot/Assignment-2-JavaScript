// 2. Write a js program to print all negative elements in an array.

const array = [1, 2, -87, 9, -555, 99, 87]
for(let i= 0;i < array.length;i++){
    if(array[i] < 0){
        console.log(array[i]);
    }
}