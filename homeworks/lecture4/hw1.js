// HTML tag validation
// Write a function that validates whether HTML tags are paired correctly or not.
// Example:
// <html><head><title>My Title</title></head></html> - true
// <html><head><title>My Title</title></head></head></html> - false
// <html><head><title>My Title</title></head></html> - true

function checkValidHTML(html) {
  // implement your solution here
  const stack = [];
  const tags = html.match(/<\/?(\w+)>/g);
  for (let tag of tags) {
    if (/<(\w+)>/g.test(tag)) {
      stack.push(tag);
    } else {
      let open = stack.pop();
      if (!open || open.slice(1) != tag.slice(2)) {
        return false;
      }
    }
  }
  return true;
}
let a = "<html><head><title>My Title</title></head></html>";
let b = "<html><head><title>My Title</title></head></head></html>";
let c = "<html><head><title>My Title</title></head></html>";
console.log(checkValidHTML(a));
console.log(checkValidHTML(b));
console.log(checkValidHTML(c));
