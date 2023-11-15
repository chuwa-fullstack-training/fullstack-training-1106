function counter(c = 0) {
    // implement here
    let count = c;
    return function(i = 0){
        count += i;
        return count;
    };
}

let count = counter();
console.log(count(3));  // Output: 3
console.log(count(5));  // Output: 8 (3 + 5)
console.log(count());   // Output: 8