// Algorithms

// 1. Write a function that returns the largest element in a list.
function largestElement(list) {
    // implement your code here
    var maxNum = Number.MIN_VALUE;
    for (let val of list) {
        maxNum = Math.max(maxNum, val);
    }
    return maxNum;
}
// test
let arr1 = [13,  0, 22, -10];
console.log(largestElement(arr1));    // 22

// 2. Write function that reverses a list, preferably in place.
function reverseList(list) {
    // implement your code here
    var left = 0, right = list.length - 1;
    while (left < right) {
        let temp = list[left];
        list[left] = list[right];
        list[right] = temp;
        left++;
        right--;
    }
    return list;
}
// test
let arr2 = [13, 0, 22, -10];
console.log(reverseList(arr2));    // [ -10, 22, 0, 13 ]

// 3. Write a function that checks whether an element occurs at least twice in a list.
function checkTwice(list, element) {
    // implement your code here
    var flag = false;
    for (let val of list) {
        if (val === element) {
            if (!flag) {
                flag = true;
            } else {
                return true;
            }
        }
    }
    return false;
}
// test
let arr3 = [13, 0, 22, -10, 0];
console.log(checkTwice(arr3, 0));    // true
console.log(checkTwice(arr3, 22));    // false