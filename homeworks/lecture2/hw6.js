// Algorithms

// 1. Write a function that returns the largest element in a list.
function largestElement(list) {
    // implement your code here
    if (list.length == 0)
        return null;
    return list.reduce((max, curr) => Math.max(max, curr));
}

// 2. Write function that reverses a list, preferably in place.
function reverseList(list) {
    // implement your code here
    return list.reverse();
}

// 3. Write a function that checks whether an element occurs at least twice in a list.
function checkTwice(list, element) {
    // implement your code here
    return list.indexOf(element) != list.lastIndexOf(element);
}

module.exports = {
    largestElement,
    reverseList,
    checkTwice,
}