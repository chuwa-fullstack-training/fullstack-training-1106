// Algorithms

// 1. Write a function that returns the largest element in a list.
function largestElement(list) {
    // implement your code here
    return Math.max(...list);

    // return Math.max.apply(null, list);
}

// 2. Write function that reverses a list, preferably in place.
function reverseList(list) {
    // implement your code here
    return list.reverse();
}

// 3. Write a function that checks whether an element occurs at least twice in a list.
function checkTwice(list, element) {
    // implement your code here
    // Method 1:
    return list.filter(x => x === element).length >= 2;

    // // Method 2:
    // return new Set(list).size !== list.length;
}
console.log(checkTwice([1, 2, 3, 4, 5, 6, 7, 8, 9], 1));