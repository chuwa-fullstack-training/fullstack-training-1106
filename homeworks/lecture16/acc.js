const acc = (obj) =>{
    let sum = 0;
    if (typeof obj !== 'object'){
        throw Error('input is not an object');
    }
    if (Object.keys(obj).length === 0){
        throw Error('object is empty');
    }
    for (let key in obj){
        if (typeof key !== 'number'){
            throw Error('key is not a number');
        }
        if (typeof obj[key] !== 'number'){
            throw Error('value is not a number');
        }
        if (obj[key] < 0 || obj[key] > 100){
            throw Error('value is not in range 0-100');
        }

    }


    for (let key in obj){
        sum += obj[key];
        if (sum > 100){
            throw Error('sum of values is greater than 100');
        }
    }
   
    let productSum = 0;
    for (let key in obj){
        productSum += key * obj[key] / 100;
    }
    return {accumulatedPercentage: sum,
            accumulatedNode: productSum};
}

//console.log(acc({})); // {accumulatedPercentage: 15, accumulatedNode: 40}

let johnDoePerson = {
    firstName: "John",
    lastName: "Doe",
}
let jdPerson = johnDoePerson;
jdPerson.firstName = "JD";
jdPerson.age = 25;

let srGzPerson = {
    ...johnDoePerson,
}
srGzPerson.age = "55";

//console.log(johnDoePerson.firstName, johnDoePerson.age, srGzPerson.age); // JD 25

let getAllWidths = function(){
    var width = 100;
    function getWidth(){
        return this.width;
    }
    var topObject = {
        width:150,
        topGetWidth: getWidth,
        nestedObject: {
            width:200,
            nestedGetWidth: getWidth
        }
    }
    return getWidth() + " "+ topObject.topGetWidth() + topObject.nestedObject.nestedGetWidth();
}

function timeoutPromise(ms){
    return new Promise((resolve, reject) => {
        console.log("creating promise for " + ms+" ms call");
        setTimeout(() => {
            resolve(ms);
            console.log("Promise resolved in setTimeout for " + ms + " ms call")
        }, ms);
    });
}
async function timeoutTest(){
    await timeoutPromise(2000);
    await timeoutPromise(1000);
}
//timeoutTest();

// timeoutPromise(1000).then((ms) => {
//     console.log("In begining of then block");
//     throw "forcing error in then block";
//     console.log("In end of then block");
// }).catch((error) => console.log(error)).finally(() => console.log("in finally block"));

// const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
// wait(0).then(() => console.log(4));
// Promise.resolve().then(() => console.log(2)).then(() => console.log(3));
// console.log(1);
foo = 1;
(function(){
   foo = 2;
})();
var x = function(){
    foo = 3;
};
(function(){
     foo = 4;
})();
//console.log(foo); // 4
// let myLiteralObj = {
//     age : 20,
//     setAge:(newAge) => {
//         this.age = newAge;
//     },
//     getAge:() => {
//         return this.age;
//     },
//     getSeniorStatusThroDirectAceess:function(){
//         if (this.age > 55)
//             return "senior";
//         else
//             return "Not senior";
//     },
//     getSeniorStatusThroGettor:function(){
//         if (this.getAge() > 55)
//             return "senior";
//         else
//             return "Not senior";
//     }


// }
// myLiteralObj.setAge(57);
// console.log(myLiteralObj.getSeniorStatusThroDirectAceess());
// console.log(myLiteralObj.getSeniorStatusThroGettor());

function replace(oldText, findText, replaceText) {
    let newS = oldText.split(" ");
    newS = newS.map((word) => word.replace(/[^a-zA-Z]/g, "").toLowerCase() === findText.toLowerCase() ? replaceText : word);
    return newS.join(" ");
}

let string = "I love text, and b and text";
let find = "text";
let replaceWith = "message";

function maxOnesByContiguousInversion(arr) {
    let maxOnes = 0; // Initialize the maximum number of ones
    let countZeros = 0; // Initialize the count of zeros within the window
    let left = 0; // Initialize the left pointer of the window

    // Iterate through the array
    for (let right = 0; right < arr.length; right++) {
        // If the current element is 0, increment the count of zeros
        if (arr[right] === 0) {
            countZeros++;
        }

        // Shrink the window until the count of zeros is within the limit
        while (countZeros > 1) {
            if (arr[left] === 0) {
                countZeros--;
            }
            left++;
        }

        // Update the maximum number of ones
        maxOnes = Math.max(maxOnes, right - left + 1);
    }

    return maxOnes;
}

// Example usage:
const arr = [0,1,0,0,1];
console.log(maxOnesByContiguousInversion(arr)); // Output: 6
