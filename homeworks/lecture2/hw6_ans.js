// Algorithms

// 1. Write a function that returns the largest element in a list.
function largestElement(list) {
    // implement your code here
    if(list.length === 0){
        return undefined;
    }
    let max = list[0];
    for(let i = 0; i < list.length; i++){
        if(list[i] > max){
            max = list[i];
        }
    }
    return max;

}

// 2. Write function that reverses a list, preferably in place.
function reverseList(list) {
    // implement your code here
    len = list.length;
    if(len === 0){
        return undefined;
    }
    let loop_end = len % 2 === 0? len/2 : (len - 1)/2;
    for(let i = 0; i < loop_end; i++){
        let m = list[len-1-i];
        list[len-1-i] = list[i];
        list[i] = m;
    }
    console.log(list)
}

// 3. Write a function that checks whether an element occurs at least twice in a list.
function checkTwice(list, element) {
    // implement your code here
    let count = 0;
    for(let i = 0; i < list.length; i++){
        if(list[i] === element){
            count += 1;
        }
    }
    if(count >= 2){
        return true;
    }
    return false;
}
var l = [1,2,3,4,5,5,6,7,6,5]
reverseList(l)
console.log(largestElement(l))
console.log(checkTwice(l,1))