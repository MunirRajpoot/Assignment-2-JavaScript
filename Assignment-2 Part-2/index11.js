// 11. Write a js program to count frequency of each element in an array.

function countFrequency(arr) {
    const frequency = {};
    
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] in frequency) {
        frequency[arr[i]]++;
      } else {
        frequency[arr[i]] = 1;
      }
    }
    
    console.log(frequency);
  }
  
  // Example usage:
  const arr = [5, 7, 1, 8, 4, 7, 5];
  countFrequency(arr); // Output: {5: 2, 7: 2, 1: 1, 8: 1, 4: 1}