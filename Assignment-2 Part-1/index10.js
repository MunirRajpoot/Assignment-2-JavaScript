// 10. Write a JS code to find duplicate values in a given array

function findDuplicates(arr) {
    let duplicates = [];
    
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j] && !duplicates.includes(arr[i])) {
          duplicates.push(arr[i]);
        }
      }
    }
    
    return duplicates;
  }
 let myarray=[1,1,2,3,3,4,5,6,7,8,9]
 const duplicates= findDuplicates(myarray)
  console.log(duplicates)