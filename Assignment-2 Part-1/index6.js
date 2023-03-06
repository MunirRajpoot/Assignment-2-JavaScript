// 6. Write a JS code to find the no of digits in a number

let num = [12, 13, 15, 16, 17, 18, 20];
let numSearched = 13;
for (let i = 0; i <= num.length; i++) {
    if (num[i] === numSearched) {
        console.log(` Number=${num[i]}`);
    }
    // else if(!num[i]===numSearched){
    //     console.log(`Number is not found.`);
    // }
    //    else{
    //     return -1;
    //    }
}