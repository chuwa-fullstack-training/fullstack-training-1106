function counter() {
    // implement here
    // establish closure property
    let total = 0;
    return function (x) {
        (x != null) && (total += x);
        return total;
    }
}

let count = counter();
console.log(count(3));  // Output: 3
console.log(count(5));  // Output: 8 (3 + 5)
console.log(count());   // Output: 8