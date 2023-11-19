// HTML tag validation
// Write a function that validates whether HTML tags are paired correctly or not.
// Example:
// <html><head><title>My Title</title></head></html> - true
// <html><head><title>My Title</title></head></head></html> - false
// <html><head><title>My Title</title></head></html - true

function checkValidHTML(html) {
  // implement your solution here
  const startTagRegex = /<(\w*)>/g;
  const endTagRegex = /<\/(\w*)>/g;
  const startTags = html.match(startTagRegex).map(text => text.replace('<', '').replace('>', ''));
  const endTags = html.match(endTagRegex).map(text => text.replace('<\/', '').replace('>', '')).reverse();
  return startTags.toString() === endTags.toString();
}

const html1 = "<html><head><title>My Title</title></head></html>";
const html2 = "<html><head><title>My Title</title></head></head></html>";
const html3 = "<html><head><title>My Title</title></head></html";
console.log(checkValidHTML(html1));
console.log(checkValidHTML(html2));
console.log(checkValidHTML(html3));
