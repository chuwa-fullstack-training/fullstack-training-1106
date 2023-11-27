// HTML tag validation
// Write a function that validates whether HTML tags are paired correctly or not.
// Example:
// <html><head><title>My Title</title></head></html> - true
// <html><head><title>My Title</title></head></head></html> - false

function checkValidHTML(html) {
    // implement your solution here
    const htmlTagRegex = /<\/?[a-z][\s\S]*?>/gi;
    let tags = html.match(htmlTagRegex);
    let stk = [];
    for (let tag of tags) {
        if (tag[1] === '/') {
            if (stk.length === 0) {
                return false;
            }
            lastTag = stk.pop();
            if (lastTag !== tag.substring(2, tag.length-1)) {
                return false;
            }
        } else {
            stk.push(tag.substring(1, tag.length-1));
        }
    }
    if (stk.length !== 0) {
        return false;
    }
    return true;
}

module.exports = checkValidHTML;