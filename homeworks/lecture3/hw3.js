function counter() {
    var val = 0;

    return function count(a) {
        if (a !== undefined) {
            val += a;
        }
        return val;
    };
}

let count = counter();
console.log(count(3));  // Output: 3
console.log(count(5));  // Output: 8 (3 + 5)
console.log(count());   // Output: 8