// Algorithms

// 1. Write a function that returns the largest element in a list.
function largestElement(list) {
  // implement your code here
  max_val = list[0];
  for (let i = 1; i < list.length; i++) {
    if (list[i] > max_val) {
      max_val = list[i];
    }
  }
  console.log(max_val);
}

// 2. Write function that reverses a list, preferably in place.
function reverseList(list) {
  // implement your code here
  var left = 0;
  var right = list.length - 1;
  while (left < right) {
    temp = list[left];
    list[left] = list[right];
    list[right] = temp;
    left++;
    right--;
  }
}

// 3. Write a function that checks whether an element occurs at least twice in a list.
function checkTwice(list, element) {
  // implement your code here
  var count = 0;
  for (let i = 0; i < list.length; i++) {
    if (list[i] === element) {
      if (count === 1) {
        return true;
      }
      count++;
    }
  }
  return false;
}
