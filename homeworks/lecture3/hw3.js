function counter() {
    // implement here
    var ans = 0;
    var count = function(a){
        if(arguments.length==0) return ans;
        ans += a;
        return ans;
    }
    return count;
}

let count = counter();
console.log(count(3));  // Output: 3
console.log(count(5));  // Output: 8 (3 + 5)
console.log(count());   // Output: 8