// HTML tag validation
// Write a function that validates whether HTML tags are paired correctly or not.
// Example:
// <html><head><title>My Title</title></head></html> - true
// <html><head><title>My Title</title></head></head></html> - false
// <html><head><title>My Title</title></head></html - true

function checkValidHTML(html) {
    // implement your solution here
    const stack = [];
    const tagRegex = /<\/?[\w\s="']+\/?>/g;
  
    // Extract all HTML tags from the input string
    const tags = html.match(tagRegex) || [];
  
    for (const tag of tags) {
      if (tag.startsWith('</')) {
        const expectedOpeningTag = `<${tag.slice(2, -1)}>`;
            if (stack.pop() !== expectedOpeningTag) {
                return false;
            }
          } else if (tag.endsWith('/>')) {
        } else {
        stack.push(tag);
      }
    }
  
    return stack.length === 0;
}
const example1 = '<html><head><title>My Title</title></head></html>';
const example2 = '<html><head><title>My Title</title></head></head></html>';
const example3 = '<html><head><title>My Title</title></head></html>';

console.log(checkValidHTML(example1)); // true
console.log(checkValidHTML(example2)); // false
console.log(checkValidHTML(example3)); // true