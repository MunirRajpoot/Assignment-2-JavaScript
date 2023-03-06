// 12. Write a JS code for Binary search algorithm

function binarySearch(array, target) {
    let startIndex = 0;
    let endIndex = array.length - 1;
  
    while (startIndex <= endIndex) {
      const middleIndex = Math.floor((startIndex + endIndex) / 2);
  
      if (array[middleIndex] === target) {
        return middleIndex;
      } else if (array[middleIndex] < target) {
        startIndex = middleIndex + 1;
      } else {
        endIndex = middleIndex - 1;
      }
    }
  
    return -1;
  }
  const arr = [1, 3, 5, 7, 9];

  console.log(binarySearch(arr, 5)); 
  console.log(binarySearch(arr, 2)); 