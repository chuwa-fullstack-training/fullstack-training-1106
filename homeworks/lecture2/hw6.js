// Algorithms

// 1. Write a function that returns the largest element in a list.
function largestElement(list) {
    // implement your code here
    let len = list.length;
    let maxEle = -Infinity;

    for(let i = 0; i<len;i++){
        if(list[i]>maxEle){
            maxEle = list[i]
        }
    }
    return maxEle
}

// 2. Write function that reverses a list, preferably in place.
function reverseList(list) {
    // implement your code here
    let len = list.length;
    let left = 0;
    let right = list.length-1;

    while(left<right){
        let temp = list[left]
        list[left] = list[right]
        list[right] = temp
        left++
        right--
    }
    return list
}

// 3. Write a function that checks whether an element occurs at least twice in a list.
function checkTwice(list, element) {
    // implement your code here
    const map = new Map();

    for(let i = 0;i<list.length;i++){
        if(list[i] === element){
            map.set(element,(map.get(element)+1||1))
        }
    }
    
    if(map.get(element) > 1){
        return true
    }
    return false
}

// let list = [1,4,2,6,2,8]
// console.log(largestElement(list));
// console.log(reverseList(list));
// console.log(checkTwice(list, 2));