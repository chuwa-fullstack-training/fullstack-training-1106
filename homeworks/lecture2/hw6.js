// Algorithms

// 1. Write a function that returns the largest element in a list.
function largestElement(list) {
    // implement your code here
    if (list.length === 0) {
        return null; // or undefined, or throw an error depending on requirements
    }
    let largest = list[0];
    for (let i = 1; i < list.length; i++) {
        if (list[i] > largest) {
            largest = list[i];
        }
    }
    return largest;
}

// 2. Write function that reverses a list, preferably in place.
function reverseList(list) {
    // implement your code here
    let left = 0;
    let right = list.length - 1;
    while (left < right){
        [list[left], list[right]] = [list[right], list[left]];
        left++;
        right--;
    }
}

// 3. Write a function that checks whether an element occurs at least twice in a list.
function checkTwice(list, element) {
    // implement your code here
    let count = list.reduce(function (accumulator, currenctVal) {
        return currenctVal === element ? accumulator + 1 : accumulator;
      }, 0);
    return count >= 2
}

arr = [1, 2, 3 ,3, 4, 5]
console.log(checkTwice(arr, 3))