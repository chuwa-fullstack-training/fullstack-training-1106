// Algorithms

// 1. Write a function that returns the largest element in a list.
function largestElement(list) {
    // implement your code here
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

    while (left < right) {
        const temp = list[left];
        list[left] = list[right];
        list[right] = temp;

        left++;
        right--;
    }
}

// 3. Write a function that checks whether an element occurs at least twice in a list.
function checkTwice(list, element) {
    // implement your code here
    const count = {};

    for (const item of list) {
        if (count[item]) {
            count[item]++;
        } else {
            count[item] = 1;
        }
    }
    return count[element] >= 2;
}