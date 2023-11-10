// Algorithms

function largestElement(list) {
    if (list.length === 0) {
        return undefined;
    }
    
    var result = list[0];
    for (let num of list) {
        if (result < num) {
            result = num;
        }
    }
    return result;
}

// 2. Write function that reverses a list, preferably in place.
function reverseList(list) {
    var left = 0;
    var right = list.length - 1;

    while (right > left) {
        let temp = list[right];
        list[right] = list[left];
        list[left] = temp;

        left++;
        right--;
    }
}

// 3. Write a function that checks whether an element occurs at least twice in a list.
function checkTwice(list, element) {
    var count = 0;
    for (let num of list) {
        if (num === element) {
            count++;
        }
    }

    return count >= 2;
}