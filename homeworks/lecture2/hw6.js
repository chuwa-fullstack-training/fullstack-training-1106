// Algorithms

let arr = [1,5,2,3,7,6,5];

// 1. Write a function that returns the largest element in a list.
function largestElement(list) {
    // implement your code here
    let max = Number.MIN_VALUE;

    for (let n of list){
        max = Math.max(n,max);
    }

    return max;

    //return Math.max(...list);
}
console.log(largestElement(arr));

// 2. Write function that reverses a list, preferably in place.
function reverseList(list) {
    // implement your code here
    let [left , right] = [0, list.length-1] ;

    while(left < right){
        let tmp = list[left];
        list[left] = list[right];
        list[right] = tmp;

        left++;
        right--;
    }

    return list;
}
console.log(reverseList(arr));

// 3. Write a function that checks whether an element occurs at least twice in a list.
function checkTwice(list, element) {
    // implement your code here
    let count = 0;

    list.forEach(item => {
        if(item === element){
            count++;
        }
    });

    return count>=2;
}
console.log(checkTwice(arr, 5));
console.log(checkTwice(arr, 7));