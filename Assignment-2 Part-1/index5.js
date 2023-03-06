// 5. Write a JS code to print a pattern using for loop
// /* 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// 1 2 3 4 5 6
// 1 2 3 4 5 6 7
// 1 2 3 4 5 6 7 8 */



for (let i = 1; i <= 8; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
        pattern = pattern + j + " ";
    }
    console.log(pattern);
}