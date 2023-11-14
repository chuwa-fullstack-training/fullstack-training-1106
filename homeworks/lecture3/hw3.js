function counter() {
    // implement here
    let rst = 0;

    function count(number){
        if (number === undefined) {
            number = 0;
        }
        rst += number;
        return rst
    }

    return count;
}

let count = counter();
console.log(count(3));  // Output: 3
console.log(count(5));  // Output: 8 (3 + 5)
console.log(count());   // Output: 8