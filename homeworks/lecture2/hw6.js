// Algorithms

// 1. Write a function that returns the largest element in a list.
function largestElement(list) {
    // implement your code here
    var max_val = Number.NEGATIVE_INFINITY;
    for (num of list) {
        max_val = max_val < num ? num :  max_val;
    }
    return max_val;
}

const list_asc = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const list_desc = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
const list_rand = [15, 1, -50, 30, 99, 5];
console.log(largestElement(list_asc));
console.log(largestElement(list_desc));
console.log(largestElement(list_rand));

// 2. Write function that reverses a list, preferably in place.
function reverseList(list) {
    // implement your code here
}

// 3. Write a function that checks whether an element occurs at least twice in a list.
function checkTwice(list, element) {
    // implement your code here
}