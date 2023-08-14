function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

sum(numbers[0], numbers[1], numbers[2]); // 6

console.log(sum(...numbers)); // 6

function restFn(x, y, ...rest) {
  return x + y + rest;
}

console.log(restFn(1, 2, 3, 4, 5)); // ??
