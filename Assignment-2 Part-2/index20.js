// 20. Write a js program to sort even and odd elements of array separately.

function sortEvenOdd(arr) {
    const even = arr.filter(num => num % 2 === 0).sort((a, b) => a - b);
    const odd = arr.filter(num => num % 2 !== 0).sort((a, b) => a - b);
    return [...even, ...odd];
  }
  const arr = [3, 7, 1, 8, 4, 2, 6, 5];
  const sortedArr = sortEvenOdd(arr);
  console.log(sortedArr);
  