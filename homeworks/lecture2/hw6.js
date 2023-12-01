// Algorithms

// 1. Write a function that returns the largest element in a list.
function largestElement(list) {
    let result = -1;
    list.forEach(element=>{
        result = result > element ? result : element; 
    })
    return result;
}
// let list = [2,3,4,1,6,9,22,3,11];
// console.log(largestElement(list));

// 2. Write function that reverses a list, preferably in place.
function reverseList(list) {
    let leftPtr = 0;
    let rightPtr = list.length - 1;
    while(rightPtr > leftPtr){
        let temp = list[leftPtr];
        list[leftPtr] = list[rightPtr];
        list[rightPtr] = temp;
        rightPtr--;
        leftPtr++;
    }
    return list;
    // implement your code here
}
// let list = [1,2,3,4,5,6];
// console.log(reverseList(list));

// 3. Write a function that checks whether an element occurs at least twice in a list.
function checkTwice(list, element) {
    // implement your code here
    let newList = list.filter(item=>{
        if(item === element){
            return item;
        }
    })
    return newList.length > 1;
}
// let list = [1,2,3,4,5,6,6];
// console.log(checkTwice(list,6));