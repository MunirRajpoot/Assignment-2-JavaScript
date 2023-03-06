// 9. Write a JS code to print the Fibonacci series for a given value of N

function fibonacci(n) {
    let series = [0, 1];
    for (let i = 2; i <= n; i++) {
      series.push(series[i - 1] + series[i - 2]);
    }
    return series;
  }
  
  console.log(fibonacci(20)); 