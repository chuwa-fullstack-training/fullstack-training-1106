// Algorithms

// 1. Write a function that returns the largest element in a list.
function largestElement(list) {
    // implement your code here
    if (list.length === 0){
        return undefined;
    }
    let maxNum = list[0];
    for (let i of list){
        if (i > maxNum){
            maxNum = i;
        }
    }
    return maxNum;
}

// 2. Write function that reverses a list, preferably in place.
function reverseList(list) {
    // implement your code here
    // initialize the first and second pointer
    let first = 0;
    let second = list.length - 1;

    while (first < second){
        let temp = list[first];
        list[first] = list[second];
        list[second] = temp;

        first++;
        second--;
    }
    return list    
}

// 3. Write a function that checks whether an element occurs at least twice in a list.
function checkTwice(list, element) {
    // implement your code here
    let count = 0;
    for (let i of list){
        if ( i === element){
            count++;
            if (count >= 2){
                return true;
            }
        }
    }
    return false;

}