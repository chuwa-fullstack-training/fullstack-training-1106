// Algorithms

// 1. Write a function that returns the largest element in a list.
function largestElement(list) {
    // implement your code here
    if (list.length == 0) { return null; }
    let result = list[0];
    list.forEach((val) => {
        result = Math.max(result, val);
    });
    return result;
}

// 2. Write function that reverses a list, preferably in place.
function reverseList(list) {
    // implement your code here
    // two pointers swapping
    if (list.length <= 1) { return list }
    let i=0, j=list.length-1;
    while (i <= j) {
        let temp = list[i];
        list[i] = list[j], list[j] = temp;
        i++;
        j--;
    }
    return list;
}

// 3. Write a function that checks whether an element occurs at least twice in a list.
function checkTwice(list, element) {
    // implement your code here
    let occur = 0;
    list.forEach((val) => {
        (val == element) && (occur++);
    })
    return occur >= 2;
}

// test case for largestElement
console.assert(largestElement([1, 2, 3, 4, 5]) === 5, 'Test 1 failed');
console.assert(largestElement([]) === null, 'Test 2 failed');
console.assert(largestElement([3]) === 3, 'Test 3 failed');
console.assert(largestElement([-3, -3, -1]) === -1, 'Test 4 failed');

// test case for reverseList
console.assert(reverseList([1, 2, 3, 4, 5]).toString() === [5, 4, 3, 2, 1].toString(), 'Test 5 failed');
console.assert(reverseList([1, 2]).toString() === [2, 1].toString(), 'Test 6 failed');
console.assert(reverseList([2]).toString() === [2].toString(), 'Test 7 failed');
console.assert(reverseList([]).toString() === [].toString(), 'Test 8 failed');

// test case for checkTwice
console.assert(checkTwice([1, 1, 3, 4, 5], 1) === true, 'Test 9 failed');
console.assert(checkTwice([], 1) === false, 'Test 10 failed');
console.assert(checkTwice([2, 3, 4, 5], 1) === false, 'Test 11 failed');