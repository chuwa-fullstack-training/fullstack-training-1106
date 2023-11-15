// HTML tag validation
// Write a function that validates whether HTML tags are paired correctly or not.
// Example:
// <html><head><title>My Title</title></head></html> - true
// <html><head><title>My Title</title></head></head></html> - false
// <html><head><title>My Title</title></head></html - true

function checkValidHTML(html) {
    // implement your solution here
    const stack = [];
    // regex to correctly capture tag names
    const tagRegex = /<\/?(\w+)[^>]*>?/g;
    let match;
    while ((match = tagRegex.exec(html)) !== null) {
        const [fullTag, tagName] = match;       // fullTag: with arrow brackets
        if (fullTag.startsWith('</')) {
            // Check for matching closing tag
            if (stack.length === 0 || stack.pop() !== tagName) return false;
        } else {
            // Push opening tag name, ignore self-closing tags
            stack.push(tagName);
        }
    }
    // Check if all tags were closed
    return stack.length === 0;
}

console.log(checkValidHTML("<html><head><title>My Title</title></head></html>"));               // true
console.log(checkValidHTML("<html><head><title>My Title</title></head></head></html>"));        // false
console.log(checkValidHTML("<html><head><title>My Title</title></head></html"));                // true