// 9. Write a js program to insert an element in an array.

function insertElement() {
    let array = [1, 2, 3, 4, 5];

    let index = 3;

    let element = 8;
  
    array.splice(index, 0, element);
    console.log(array);
}

insertElement();