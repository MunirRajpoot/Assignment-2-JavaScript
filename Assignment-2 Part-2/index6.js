// 6. Write a js program to count total number of even and odd elements in
// an array

function countEvenOdd(arr) {
    let evenCount = 0;
    let oddCount = 0;
    
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] % 2 === 0) {
        evenCount++;
      } else {
        oddCount++;
      }
    }
    
    console.log(`Total even elements: ${evenCount}`);
    console.log(`Total odd elements: ${oddCount}`);
  }
  
  const arr = [5, 7, 1, 8, 4, 7, 5];
  countEvenOdd(arr); 