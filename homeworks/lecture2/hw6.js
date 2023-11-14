// Algorithms

// 1. Write a function that returns the largest element in a list.
function largestElement(list) {
  // implement your code here
  return list.reduce((acc, curr) => (acc >= curr ? acc : curr), -1 / 0);
}

// 2. Write function that reverses a list, preferably in place.
function reverseList(list) {
  // implement your code here
  let left = 0;
  let right = list.length - 1;
  while (left <= right) {
    [list[left], list[right]] = [list[right], list[left]];
    left++;
    right--;
  }
  return list;
}

// 3. Write a function that checks whether an element occurs at least twice in a list.
function checkTwice(list, element) {
  // implement your code here
  let count = list.reduce((acc, curr) => {
    if (curr == element) {
      acc++;
    }
    return acc;
  }, 0);

  return count >= 2;
}

let f1out;
f1out = largestElement([1, 2, 3, 4, 5]);
console.log(f1out);
f1out = largestElement([5, 4, 3, 2, 1]);
console.log(f1out);
f1out = largestElement([5, 1, 3, 2, 4]);
console.log(f1out);
f1out = largestElement([5, -4, 3, -2, 1]);
console.log(f1out);
f1out = largestElement([-5, 4, -3, 2, -1]);
console.log(f1out);

let f2out;
f2out = reverseList([1, 2, 3, 4, 5]);
console.log(f2out);
f2out = reverseList([1, 1, 1, 2, 2, 2]);
console.log(f2out);
f2out = reverseList([1, 1, 1, 3, 2, 2, 2]);
console.log(f2out);
f2out = reverseList([1, 2, 3, 3, 2, 1]);
console.log(f2out);
f2out = reverseList([5, 4, 3, 2, 1]);
console.log(f2out);

let f3out;
f3out = checkTwice([1, 2, 3], 3);
console.log(f3out);
f3out = checkTwice([1, 2, 3, 3], 3);
console.log(f3out);
f3out = checkTwice([1, 1, 2, 2, 3], 3);
console.log(f3out);
f3out = checkTwice([1, 1, 2, 2, 3, 3], 3);
console.log(f3out);
f3out = checkTwice([1, 1, 2, 2, 3, 3, 3], 3);
console.log(f3out);
