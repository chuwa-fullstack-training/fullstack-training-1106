function counter() {
    // implement here
    let staticCounter = 0;
    return num => staticCounter += (num ?? 0);
}

let count = counter();
console.log(count(3));  // Output: 3
console.log(count(5));  // Output: 8 (3 + 5)
console.log(count());   // Output: 8