function counter() {
    // implement here
    let counter = 0;

    function addIn(...rest) {
        if (rest.length == 1) {
            counter += rest[0];
        }
        return counter;
    }

    return addIn;
}

let count = counter();
console.log(count(3));  // Output: 3
console.log(count(5));  // Output: 8 (3 + 5)
console.log(count());   // Output: 8