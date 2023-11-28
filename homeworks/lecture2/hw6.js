// Algorithms

// 1. Write a function that returns the largest element in a list.
function largestElement(list) {
    // implement your code here
    var largest = list[0];
    for (var i = 1; i < list.length; i++) {
        if (list[i] > list[i - 1]) 
            largest = list[i];
    }
    return largest;
   
}

// 2. Write function that reverses a list, preferably in place.
function reverseList(list) {
    // implement your code here
    var reversed = [];
    for (var i = list.length - 1; i >= 0; i--) {
        reversed.push(list[i]);
    }
    return reversed;

    // list.reverse(); ???
}

// 3. Write a function that checks whether an element occurs at least twice in a list.
function checkTwice(list, element) {
    // implement your code here
    var count = 0;
    for (var i = 0; i < list.length; i++) {
        if (list[i] === element) 
            count++;
    }
    return count >= 2;
}