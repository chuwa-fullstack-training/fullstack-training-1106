// HTML tag validation
// Write a function that validates whether HTML tags are paired correctly or not.
// Example:
// <html><head><title>My Title</title></head></html> - true
// <html><head><title>My Title</title></head></head></html> - false
// <html><head><title>My Title</title></head></html - true
// Solution: use stack to check if the tags are paired correctly
// Space Complexity: O(n)
// Time Complexity: O(n)
function checkValidHTML(html) {
    // implement your solution here
    // use RegExp to match the HTML tags
    
    let regex = /<\/?[^>]+(>|$)/g;
    let tags = html.match(regex);
    // clean all < and > in the tags
    tags = tags.map((tag) => tag.replace(/<|>/g, ''));
    console.log(tags);
    // console.log(allTags);
    // console.log(tags === allTags);
    // to list all the tags in the string
    // use stack to check if the tags are paired correctly
    let stack = [];
    for (let tag of tags) {
        if (tag[0] === '/') {
            if (stack.length === 0) {
                return false;
            }
            else {
                if (stack[stack.length - 1] === tag.slice(1)) {
                    stack.pop();
                }
                else {
                    return false;
                }
            }
        }
        else {
            stack.push(tag);
        }
    }
    return !stack.empty;
}
console.log(checkValidHTML('<html><head><title>My Title</title></head></html>')); // true
console.log(checkValidHTML('<html><head><title>My Title</title></head></head></html>')); // false
console.log(checkValidHTML('<html><head><title>My Title</title></head></html')); // false