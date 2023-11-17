// HTML tag validation
// Write a function that validates whether HTML tags are paired correctly or not.
// Example:
// <html><head><title>My Title</title></head></html> - true
// <html><head><title>My Title</title></head></head></html> - false
// <html><head><title>My Title</title></head></html - true

function checkValidHTML(html) {
    // implement your solution here
    // stack + regular expression
    const pattern = /<([\/]?[a-zA-Z]+)[^>]*>?/g;
    const allTags = [...html.matchAll(pattern)].map(val => val[1]);
    
    // check valid
    const stack = [];
    for (let val of allTags) {
        if (val[0] !== "/") {
            stack.push(val);
        } else {
            let top = stack.pop();
            if (top !== val.substring(1)) { return false; }
        }
    }
    return stack.length === 0;
}

// test cases
console.assert(checkValidHTML("<html><head><title>My Title</title></head></html>"), "Test 1 failed");
console.assert(!checkValidHTML("<html><head><title>My Title</title></head></head></html>"), "Test 2 failed");
console.assert(checkValidHTML("<html><head><title>My Title</title></head></html"), "Test 3 failed");