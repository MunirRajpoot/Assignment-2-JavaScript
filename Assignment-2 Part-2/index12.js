// 12. Write a js program to print all unique elements in the array.

function printUniqueElements(arr) {
    const uniqueElements = [];
    
    for(let i = 0; i < arr.length; i++) {
      if(!uniqueElements.includes(arr[i])) {
        uniqueElements.push(arr[i]);
      }
    }
    
    console.log(uniqueElements);
  }
  
  // Example usage:
  const arr = [5, 7, 1, 8, 4, 7, 5];
  printUniqueElements(arr); // Output: [5, 7, 1, 8, 4]