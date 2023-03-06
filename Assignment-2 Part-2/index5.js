// 5. Write a js program to find second largest element in an array.

function findSecondLargest(arr) {
    let largest = arr[0];
    let secondLargest = arr[0];
    
    for(let i = 1; i < arr.length; i++) {
      if(arr[i] > largest) {
        secondLargest = largest;
        largest = arr[i];
      } else if (arr[i] > secondLargest && arr[i] !== largest) {
        secondLargest = arr[i];
      }
    }
    
    return secondLargest;
  }
  
  
  const arr = [5, 7, 1, 8, 4];
  const secondLargest = findSecondLargest(arr);
  console.log(secondLargest); // Output: 7