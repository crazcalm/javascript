"use strict";

function range(start, end) {
  let result = new Array();
  for (let count = start; count < end; count++) {
    result.push(count);
  }
  return result;
}

const numbers = range(2, 2025);

let result = [1];
let last_odd = 1;
for (let num of numbers) {
  if (num % 2 === 1) {
    if (num - last_odd > 6 && num - result[result.length - 1] > 2) {
      last_odd = num;
      result.push(num);
      continue;
    }
  }
  if (num % 2 === 0) {
    if (num - result[result.length - 1] > 2) {
      result.push(num);
    }
  }
}

console.log(result);
console.log(result.length);
