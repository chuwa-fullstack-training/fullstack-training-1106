function counter() {
    // implement here
    let count = 0;

    return function (increment = 0) {
        if (typeof increment === 'number') {
            count += increment;
        }
        return count;
    };
}

let count = counter();
console.log(count(3));  // Output: 3
console.log(count(5));  // Output: 8 (3 + 5)
console.log(count());   // Output: 8