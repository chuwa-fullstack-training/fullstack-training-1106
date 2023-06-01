function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

sum(numbers[0])

console.log(sum(...numbers)); // 6

function rest(x, y, ...rest) {
  return x + y + rest;
}

console.log(rest(1, 2, 3, 4, 5)); // ??
