// Algorithms

// 1. Write a function that returns the largest element in a list.
function largestElement(list) {
    // implement your code here
    if (!list || list.length === 0) {
        return null;
    }
    return list.reduce((acc, curr) => {
        return curr > acc ? curr : acc;
    }, Number.NEGATIVE_INFINITY) 
}

// 2. Write function that reverses a list, preferably in place.
function reverseList(list) {
    // implement your code here
    if (!list || list.length === 0) {
        return list;
    } 
    var i = 0;
    var j = list.length - 1;
    while (i < j) {
        [list[i], list[j]] = [list[j], list[i]]
        i++;
        j--;
    }
    return list
}

// 3. Write a function that checks whether an element occurs at least twice in a list.
function checkTwice(list, element) {
    // implement your code here
    if (!list || list.length === 0) {
        return false;
    }
    return list.filter(item => item === element).length === 2
    

}

// test largestElement
console.log(largestElement([]))
console.log(largestElement([1, 2, 3, 4, 3, 8, 1, 3]))
console.log("==========================================")
// test reverseList
console.log(reverseList([]))
console.log(reverseList([1, 2, 3, 4, 3, 8, 1, 3]))
console.log(reverseList([1, 2, 3, 4, 9, 3, 8, 1, 3]))
console.log("==========================================")
// test checkTwice
console.log(checkTwice([], 1))                           // false
console.log(checkTwice([1, 2, 3, 4, 9, 3, 8, 1, 3], 1))  // true
console.log(checkTwice([1, 2, 3, 4, 9, 3, 8, 1, 3], 2))  // false
console.log(checkTwice([1, 2, 3, 4, 9, 3, 8, 1, 3], 3))  // false
