// Algorithms

// 1. Write a function that returns the largest element in a list.
function largestElement(list) {
    let maxN = list[0];
    for(i of list){
        if(i > maxN){
            maxN = i;
        }
    }
    return maxN
}

// 2. Write function that reverses a list, preferably in place.
function reverseList(list) {
    let res = [];
    let idx = 0;
    for(let index = list.length-1;index >= 0;index--){
        res[idx] = list[index];
        idx += 1
    }
    return res
}

// 3. Write a function that checks whether an element occurs at least twice in a list.
function checkTwice(list, element) {
    let count = 0;
    for(i of list){
        if(element == i){
            count += 1
        }

    }
    if(count == 2){
        console.log(1);
    }
    else{
        console.log(0);
    }
}