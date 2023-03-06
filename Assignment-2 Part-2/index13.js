// 13. Write a js program to count total number of duplicate elements in an
// array.

function countDuplicates(arr) {
    const frequency = {};
    let count = 0;
    
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] in frequency) {
        frequency[arr[i]]++;
      } else {
        frequency[arr[i]] = 1;
      }
    }
    
    for(const key in frequency) {
      if(frequency[key] > 1) {
        count++;
      }
    }
    
    console.log(`Total duplicate elements: ${count}`);
  }
  
  // Example usage:
  const arr = [5, 7, 1, 8, 4, 7, 5];
  countDuplicates(arr); // Output: Total duplicate elements: 2