// HTML tag validation
// Write a function that validates whether HTML tags are paired correctly or not.
// Example:
// <html><head><title>My Title</title></head></html> - true
// <html><head><title>My Title</title></head></head></html> - false
// <html><head><title>My Title</title></head></html - true

function checkValidHTML(html) {
    // implement your solution here
  const stack = [];
  const tagBody = /<\/?([a-zA-Z0-9]+)[^>]*>/g;
  let match;

  while ((match = tagBody.exec(html)) !== null) {
    const tag = match[1];
    const isClosingTag = match[0][1] === '/';

    if (isClosingTag) {
      const last = stack.pop();
      if (last !== tag) {
        return false;
      }
    } else {
      stack.push(tag);
    }
  }
  return stack.length === 0;
}

const html = '<html></head><title>My Title</title></head></html>';
console.log(checkValidHTML(html));