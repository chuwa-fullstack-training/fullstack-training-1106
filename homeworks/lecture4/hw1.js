// HTML tag validation
// Write a function that validates whether HTML tags are paired correctly or not.
// Example:
// <html><head><title>My Title</title></head></html> - true
// <html><head><title>My Title</title></head></head></html> - false
// <html><head><title>My Title</title></head></html - true

function checkValidHTML(html) {
    // implement your solution here
    const stack = [];

    // Regular expression to match HTML tags
    const tagRegex = /<\/?[\w\s="']+\/?>/g;
  
    // Extract all HTML tags from the input string
    const tags = html.match(tagRegex) || [];
  
    for (const tag of tags) {
      if (tag.startsWith('</')) {
        // Closing tag
        const openingTag = stack.pop();
        if (!openingTag || !tag.endsWith(openingTag)) {
          return false;
        }
      } else {
        // Opening tag
        stack.push(tag);
      }
    }
  
    // The stack should be empty if all tags are paired correctly
    return stack.length === 0;
}