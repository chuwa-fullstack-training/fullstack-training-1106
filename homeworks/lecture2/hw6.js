// Algorithms

let l = [0, 0, 1, 3, 2, 5];
console.log(largestElement(l));
reverseList(l);
console.log(l);
console.log(checkTwice(l, 0));

// 1. Write a function that returns the largest element in a list.
function largestElement(list) {
    // implement your code here
    if(list.length === 0) {
        return null;
    }
    return list.reduce((max, curr) => curr > max ? curr : max, list[0]);
}

// 2. Write function that reverses a list, preferably in place.
function reverseList(list) {
    // implement your code here
    let left = 0, right = list.length - 1;
    while(left < right) {
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
    let cnt = 0;
    for(let i of list) {
        if(element === i) {
            cnt++;
            if(cnt === 2) {
                return true;
            }
        }
    }
    return false;
}