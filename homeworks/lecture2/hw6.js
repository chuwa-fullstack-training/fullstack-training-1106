// Algorithms

// 1. Write a function that returns the largest element in a list.
function largestElement(list) {
    let largest = list[0];
    for(let i = 0; i<list.length; i++){
        if(list[i] > largest){
            largest = list[i];
        }
    }
    return largest;
}

// Test Cases:
const list1 = [1,2,3555,5,6,2,32, -9]
console.log(largestElement(list1))      // Output: 3555

const list2 = []
console.log(largestElement(list2))      // Output: undefined

const list3 = [-9]
console.log(largestElement(list3))      // Output: -9



// 2. Write function that reverses a list, preferably in place.
function reverseList(list) {
    let i = 0;
    let j = list.length-1;
    while(i<j){
        let temp = list[i];
        list[i] = list[j];
        list[j] = temp;
        i+=1;
        j-=1;
    }
    return list;
}

// Test Cases:
const list4 = [1,2,3555,5,6,2,2, -9]
console.log(reverseList(list4))      // Output: [-9, 2, 2, 6, 5, 3555, 2, 1]

const list5 = [2,3555,5,6,2,32,-9]
console.log(reverseList(list5))      // Output: [-9, 32, 2, 6,  5, 3555, 2]

const list6 = []
console.log(reverseList(list6))      // Output: []

const list7 = [2]
console.log(reverseList(list7))      // Output: [2]



// 3. Write a function that checks whether an element occurs at least twice in a list.
function checkTwice(list, element) {
    let occurance = 0;
    for(let i = 0; i<list.length; i++){
        if(list[i]===element){
            occurance+=1;
        }
    }
    return occurance>0;
}

// Test Cases:
const list8 = [1,2,3555,5,6,2,2, -9]
console.log(checkTwice(list8, 2))      // Output: true 

const list9 = [999991,2,3555,5,6,2,32,-9]
console.log(checkTwice(list9, 1))      // Output: false

const list10 = []
console.log(checkTwice(list10, 1))      // Output: false

const list11 = [2,2,2,2,2,2]
console.log(checkTwice(list11, 2))      // Output: true