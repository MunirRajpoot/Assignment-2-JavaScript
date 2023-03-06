// 17. Write a js program to put even and odd elements of array in two
// separate array.

function separateEvenOdd(arr) {
    // create new arrays to store even and odd elements
    const evenArr = [];
    const oddArr = [];
    
    // iterate through the array and add even and odd elements to their respective arrays
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      if (element % 2 === 0) {
        evenArr.push(element);
      } else {
        oddArr.push(element);
      }
    }
    
    // return an object containing both arrays
    return {even: evenArr, odd: oddArr};
  }
  
  // example usage
  const arr = [1, 2, 3, 4, 5, 6];
  const separatedArr = separateEvenOdd(arr);
  console.log(separatedArr.even); 
  console.log(separatedArr.odd); 