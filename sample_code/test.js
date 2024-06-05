

const getLength = (str) => {
    return str.length;
    }
const concatenate = (str1, str2) => {
    return str1 + str2;
    }
const promisifyValue = value => {
    return new Promise((res, rej) => {
        res(value);
    });
    }

const isOdd = (num) =>{
    return num % 2 !== 0;
}

const addTwo=(arr) => {
    return arr.map((val) => val + 2);

}

const sum = (arr) => {
    return arr.reduce((acc, val)=> acc+ val, 0);

}

const removeVolwels = (str) => {
    vowels = ['a', 'e', 'i', 'o', 'u'];
    str = str.toLowerCase();
    return str.split('').filter((val) => !vowels.includes(val)).join('');

}

const removeDuplicates = (arr) => {
   return [...new Set(arr)];
}

const join = (arr1, arr2) => {
    return arr1.concat(arr2);
}

const getLast = (arr) => {
    return arr[arr.length-1];
}

const greaterThanThree = (arr) => {
    return arr.filter((val) => val > 3);
}

const addOne= (a) =>{
    return a+1;
}

const multiplyByTwo = (a) =>{
    return a*2;
}
const compose = (f, g) =>{
    return (x) => g(f(x));
}

const throwOn2= (a) =>{
    if(a===2){
        throw new Error('2 is not allowed');
    }
    return a;
}
const difference = (a, b) => {
    return Math.abs(a - b);
};

const onlyTruthy = (arr) => {
    return arr.filter((val) => val);
}

const setDefualt = (defaultValue) => {
    return (value) => {
        return value ? value : defaultValue;
    }
}



// let person1 = {
//     name: 'John',
//     age: 30
//   };
  
//   let person2 = person1;
//   person2.name = 'Jane';
//   console.log(person1.name);

const splitArray = (a) => {
    let res = [
        [],
        []
    ];
    let map = new Map();
    for (let i = 0; i <a.length; i++){
        if (map.has(a[i])){
            map.set(a[i], map.get(a[i])+1);
        }
        else{
            map.set(a[i], 1);
        }

    }
    for (let [key, value] of map){
        if (value > 2){
            return [];
        }
        else if (value === 2){
            res[0].push(key);
            res[1].push(key);
    }
    else{
        if (res[0].length < res[1].length){
            res[0].push(key);

    }
    else{
        res[1].push(key);
    }
    }
    }
    return res;
}

const longestEvenWord = (sentence) => {
    let words = sentence.split(' ');
    let longest = '';
    for (let word of words){
        if (word.length % 2 === 0 && word.length > longest.length){
            longest = word;
        }
    }
    return longest;
}

//console.log(longestEvenWord('Time to write great code'));

const minRemoval = (arr) => {
    let count = 0;
    if (arr.length <= 2) return 0;
    for (let i = 2; i < arr.length; i++){
        if (arr[i-1] < arr[i] && arr[i+1]  > arr[i] || arr[i-1] > arr[i] && arr[i+1] > arr[i]){
            count++;
          
        }
    }
    return count;
};
// A = {};
// B = {A: 1};
// C = {B: 2};

// A[B] = 888;
// A[C] = 999;
// console.log(A[B]);
const meanderingArray = (unsorted) => {
    let sorted = unsorted.sort((a, b) => a - b);
    let res = [];
    while (sorted.length > 0){
        res.push(sorted.pop());
        if (sorted.length > 0){
            res.push(sorted.shift());
        }
    }
    return res;
}

var objA = new Object({
    name: 'John',
    age: 31,
});
var objB = new Object({
    name: 'John',
    age: 30,
});

const minDeletions = (s) => {
    let res = 0;
    let map = new Map();
    for (let i = 0; i < s.length; i++){
        if (map.has(s[i])){
            map.set(s[i], map.get(s[i])+1);
        }
        else{
            map.set(s[i], 1);
        }
    }
    let uniqueFreq = new Set();
    for (let val of map.values()){
        while (uniqueFreq.has(val)){
            val--;
            res++;
        }
        if (val !== 0)
        uniqueFreq.add(val);
    }
    return res;
}


const getMiddle= (str) => {
    let mid = Math.floor(str.length/2);
    if (str.length % 2 === 0){
        return str[mid-1] + str[mid];
    }
    else{
        return str[mid];
    }
}

const highestOccurrence = (arr) => {
    let map = new Map();
    for (let i = 0; i < arr.length; i++){
        if (map.has(arr[i])){
            map.set(arr[i], map.get(arr[i])+1);
        }
        else{
            map.set(arr[i], 1);
        }
    }
    let max = 0;
    let res;
    for (let [key, value] of map){
        if (value > max){
            max = value;
            res = key;
        }
    }
    return res;
}

const countDuplicate = (arr) =>{
    map = new Map();
    for (let i = 0; i < arr.length; i++){
        if (map.has(arr[i])){
            map.set(arr[i], map.get(arr[i])+1);
        }
        else{
            map.set(arr[i], 1);
        }
    }
    let count = 0;
    for (let [key, value] of map){
        if (value > 1){
            count++;
        }
    }
    return count;
}

const search = (str) =>{
    words = str.split(' ');
    for (let word of words){
        map = new Map();
        for (let i = 0; i < word.length; i++){
            if (map.has(word[i])){
                map.set(word[i], map.get(word[i])+1);
            }
            else{
                map.set(word[i], 1);
            }
        }
    }
}

const getStockInformation = (date) => {
    const url = `https://jsonmock.hackerrank.com/api/stocks?date=${date}`;
    return new Promise((res, rej)=>{
        try{
        fetch(url).then((response) => response.json()).then((data) => 
        {res(data.data);
            if (data.data.length === 0){
                rej('No data available');
            }
            else{
                console.log(data.data[0]);
            }
        });
        }catch(err){
            rej(err);
        }
    });
}


const slotSpins = (spins) => {

    const getMaxDigit = (spins, remain) => {
        if (remain === 0){
            return 0;
        }
        let sum = 0;
        let maxDigit = 0;
        for (let i = 0; i < spins.length; i++){
            let max = 0;
            for (let j = 0; j < spins[i].length; j++){
                let digit = parseInt(spins[i][j]);
                if (digit > max){
                    max = digit;
                }
            }
            maxDigit = Math.max(max, maxDigit);
            let index = spins[i].indexOf(max.toString());
            spins[i] = spins[i].slice(0, index) + spins[i].slice(index+1);      

        }
        sum+= maxDigit;
        return sum+ getMaxDigit(spins, remain-1);
      
    }
    return getMaxDigit(spins, spins[0].length);
}
     


const makeInputVerifier = (min, max) => {
    return verify = (inputValue) => {
        if (inputValue < min) return 'Input is less than minimum value';
        if (inputValue > max) return 'Input is more than maximum value';
        return 'Input is in range';

    }
}

const isSubset = (arr1, arr2) => {
    let set = new Set(arr1);
    for (let i = 0; i < arr2.length; i++){
        if (!set.has(arr2[i])){
            return false;
        }
    }
    return true;
}

const splitString = (str) => {
    let seen = new Set();
    let res = 0
    let cur = '';

    for (let char of str){
        if (!seen.has(char)){
            cur+= char;
            seen.add(char);
          
        }
        else{
            res++;
            cur = char;
            seen = new Set([char]);
        }

    }
    if (cur){
        res++;
    }
    return res;

}
const rodOffcut = (lengths) => {
    let res = [];
    
    while (lengths.length > 0){
        res.push(lengths.length);
        let min = Math.min(...lengths);
        lengths = lengths.filter((val) => val !== min);
        lengths = lengths.map((val) => val - min);
        lengths = lengths.filter((val) => val !== 0);
    }
    return res;
}

const getSecondLargest = (arr) => {
    arr.sort((a,b) => a-b);
    
    return arr[arr.length-2];
}

// var count = 10;
// function edit(){
//     count = 20;
//     return;
//     var count = function(){
//     }

// }
// edit();
// console.log(count);
const maxDifference = (px) => {
    let min = px[0];
    let maxDiff = px[1] - px[0];
    for (let i =1; i < px.length; i++){
        maxDiff = Math.max(maxDiff, px[i] - min);
        min = Math.min(min, px[i]);
    }
    if (maxDiff < 0){
        return -1;
    }
    return maxDiff;
     
}

const minimumMoves = (arr1, arr2) => {
    let moves = 0;
    const getMoves = (x, y) => {
        let res = 0;
        while (x > 0){
            res += Math.abs(x%10 - y%10);
            x = Math.floor(x/10);
            y = Math.floor(y/10);
        }
        return res;
    }
    for (let i = 0; i < arr1.length; i++){
        moves+= getMoves(arr1[i], arr2[i]);
    }
    return moves;

}
const maximumMoves = (s) => {
    let map = new Map();
    for (let i = 0; i < s.length; i++){
        if (map.has(s[i])){
            map.set(s[i], map.get(s[i])+1);
        }
        else{
            map.set(s[i], 1);
        }
    }
    return Math.min(map.get('B'), map.get('A'), Math.floor(map.get('L')/2), Math.floor(map.get('O')/2), map.get('N'));
}

function mergeArrays(arr1, arr2) {
    // Create a map to store objects by their id
    const map = new Map();

    // Iterate over the first array and add objects to the map
    for (const obj of arr1) {
        map.set(obj.id, { ...obj }); // Make a copy of the object
    }

    // Iterate over the second array and merge objects with existing ones in the map
    for (const obj of arr2) {
        const existingObj = map.get(obj.id);
        if (existingObj) {
            // Merge the objects, setting non-existent properties to 'None'
            for (const key in obj) {
                if (!(key in existingObj)) {
                    existingObj[key] = 'None';
                }
            }
        } else {
            // If the object doesn't exist in the first array, add it to the map
            map.set(obj.id, { ...obj }); // Make a copy of the object
        }
    }

    // Convert the map values (objects) back to an array
    return Array.from(map.values());
}

// Example usage:
// const array1 = [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }];
// const array2 = [{ id: 2, age: 30 }, { id: 3, name: 'Alice' }];


function findCommonElements(...arrays) {
    // Check if any of the arrays is empty
    if (arrays.some(arr => arr.length === 0)) {
        return []; // If any array is empty, return an empty array (no common elements)
    }

    // Create a map to store counts of elements
    const countMap = new Map();

    // Iterate through each array and count elements
    for (const arr of arrays) {
        for (const element of arr) {
            countMap.set(element, (countMap.get(element) || 0) + 1);
        }
    }

    // Filter elements that occur in all arrays
    return Array.from(countMap.entries())
        .filter(([element, count]) => count === arrays.length)
        .map((element) => element);
}

// Example usage:
const array1 = [1, 2, 3, 4];
const array2 = [3, 4, 5];
const array3 = [2, 3, 6];

console.log(findCommonElements(array1, array2, array3)); // Output: [3]

