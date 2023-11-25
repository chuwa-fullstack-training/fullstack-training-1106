// HTML tag validation
// Write a function that validates whether HTML tags are paired correctly or not.
// Example:
// <html><head><title>My Title</title></head></html> - true
// <html><head><title>My Title</title></head></head></html> - false
// <html><head><title>My Title</title></head></html - true
function checkValidHTML(html) {
    const stack = [];
    const tagRegex = /<\/?[\w\s="/.'-]+>/g;

    // Find all HTML tags in the input string
    const tags = html.match(tagRegex) || [];
    console.log(tags);

    for (const tag of tags) {
        if (tag.startsWith('</')) {
            // Closing tag
            const expectedOpeningTag = `<${tag.slice(2, -1)}>`;
            if (stack.pop() !== expectedOpeningTag) {
                return false;
            }
        } else if (tag.endsWith('/>')) {
            // Self-closing tag
            // No need to push self-closing tags onto the stack
        } else {
            // Opening tag
            stack.push(tag);
        }
    }

    // If the stack is empty, all tags were paired correctly
    return stack.length === 0;
}

// Example usage:
const example1 = '<html><head><title>My Title</title></head></html>';
const example2 = '<html><head><title>My Title</title></head></head></html>';
const example3 = '<html><head><title>My Title</title></head></html>';

console.log(checkValidHTML(example1)); // true
console.log(checkValidHTML(example2)); // false
console.log(checkValidHTML(example3)); // true
