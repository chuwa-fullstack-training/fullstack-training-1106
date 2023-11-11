// Algorithms

// 1. Write a function that returns the largest element in a list.
function largestElement(list) {
    // implement your code here
    if(list.length == 1) return list[0];
    var max = list[0];
    for(let e of list.slice(1,list.length)){
        if(e > max) max = e;
    }
    return max;
}
console.log(largestElement([1,2,3,4]));

// 2. Write function that reverses a list, preferably in place.
function reverseList(list) {
    // implement your code here
    let i=0, j= list.length-1;
    let tmp;
    while(i<j){
        tmp = list[i];
        list[i] = list[j];
        list[j] = tmp;
        i++;
        j--;
    }
}
var arr = [1,2,3,4,2];
reverseList(arr);
console.log(arr);


// 3. Write a function that checks whether an element occurs at least twice in a list.
function checkTwice(list, element) {
    // implement your code here
    var counter = 0
    for(let e of list){
        if(e === element) counter++;
        if(counter >= 2) return true;
    }
    return false;
}

console.log(checkTwice(arr,2));