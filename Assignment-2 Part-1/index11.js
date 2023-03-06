// 11. Write a JS code for Linear search algorithm
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        return i;
      }
    }
    return -1;
  }
  

  const arr = [10, 20, 30, 40, 50];
  const target = 30;
  const index = linearSearch(arr, target);
  console.log(index); 