// 14. Write a js program to delete all duplicate elements from an array.


function removeDuplicates(arr) {
    const frequency = {};
   
    const uniqueArr = [];
    

    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      if (element in frequency) {
        frequency[element]++;
      } else {
        frequency[element] = 1;
      }
    }
    

    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      if (frequency[element] === 1) {
        uniqueArr.push(element);
      }
    }
    
    return uniqueArr;
  }
  

  const arr = [1, 2, 2, 3, 3, 4, 5, 5];
  const uniqueArr = removeDuplicates(arr);
  console.log(uniqueArr);