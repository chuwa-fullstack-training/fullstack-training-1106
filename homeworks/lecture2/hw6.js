// Algorithms

// 1. Write a function that returns the largest element in a list.
function largestElement(list) {
    // implement your code here
    //assume the list is a number list
    var max_num = Number.MIN_VALUE;
    for (let num of list) {
        max_num = Math.max(max_num, num);
    }
    return max_num;
}
//测试用例
const arr1 = [1, 3, 0, -22, 2, 0, 23, 1];
const arr2 = [299, 2002, -1290, 232, 100, 290, 9, 9];
console.log(largestElement(arr1));//23
console.log(largestElement(arr2));//2022

// 2. Write function that reverses a list, preferably in place.
function reverseList(list) {
    // implement your code here
    var left = 0;
    var right = list.length - 1;
    while (left < right) {
        let temp = list[left];
        list[left] = list[right]
        list[right] = temp
        left++;
        right--;
    }
    return list;
}
//测试用例
console.log(reverseList(arr1));//[1, 23, 0, 2, -22, 0, 3, 1]
console.log(reverseList(arr2));//[9, 290, 100, 232, -1290, 2002, 299]

// 3. Write a function that checks whether an element occurs at least twice in a list.
function checkTwice(list, element) {
    // implement your code here
    var occured = false;
    for (let e of list) {
        if (e === element) {
            if (!occured) {
                occured = true;
            }
            else {
                return true;
            }
        }
    }
    return false;
}

//测试用例
console.log(checkTwice(arr1, 1)); //true
console.log(checkTwice(arr1, 3)); //false
console.log(checkTwice(arr2, 9)); //true
console.log(checkTwice(arr2, 290)); //false