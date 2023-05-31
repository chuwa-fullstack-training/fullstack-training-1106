function spread(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

console.log(spread(...numbers)); // 6

function rest(x, y, ...z) {
  return x + y + z;
}

console.log(rest(1, 2, 3, 4, 5)); // ??
