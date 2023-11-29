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
    return list.reduce((acc, item) => {
        acc.unshift(item);
        return acc;
    }, []);
}

console.log(reverseList(list_asc));
console.log(reverseList(list_desc));

// 3. Write a function that checks whether an element occurs at least twice in a list.
function checkTwice(list, element) {
    // implement your code here
    let element_occur = 0;
    list.map((item) => {
        if (item == element) {
            element_occur++;
        }
    })
    return element_occur > 1 ? true : false;
}

const list_no_4 = [0, 0, 1, 2, 5, 6, 7, 8, 9];
const list_has_4 = [0, 0, 1, 2, 4, 5, 6, 7, 8, 9];
const list_multi_4 =  [0, 0, 1, 2, 4, 4, 5, 6, 7, 8, 9];
console.log(checkTwice(list_no_4, 4));
console.log(checkTwice(list_has_4, 4));
console.log(checkTwice(list_multi_4, 4));