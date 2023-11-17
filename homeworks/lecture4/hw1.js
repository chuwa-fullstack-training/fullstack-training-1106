// HTML tag validation
// Write a function that validates whether HTML tags are paired correctly or not.
// Example:
// <html><head><title>My Title</title></head></html> - true
// <html><head><title>My Title</title></head></head></html> - false
// <html><head><title>My Title</title></head></html - true

function checkValidHTML(html) {
    // implement your solution here
    let str = html;
    let rex = /(<\w+>)|(<\/\w+>)/;
    let lp = /(<\w+>)/;
    //let rp = /(<\/\w+>)/;
    let tagRe = /\w+/
    let cleared = str.split(rex).filter(v => rex.test(v));
    let stack = [];
    for (let tag of cleared) {
        if (lp.test(tag)) {
            stack.push(tag);
        } else {
            if (stack.length) {
                let leftTag = stack.pop();
                let leftTagName = leftTag.match(tagRe)[0];
                let rightTagName = tag.match(tagRe)[0];
                if (leftTagName != rightTagName) {
                    return false;
                }
            } else {
                return false;
            }

        }
    }
    if (stack.length) {
        return false;
    }
    return true;
}

let str = "<html><head><title>My Title</title></head></html>";
console.log(checkValidHTML(str));
str = "<html><head><title>My Title</title></head></head></html>";
console.log(checkValidHTML(str));
str = "<html><head><title>My Title</title></head></html";
console.log(checkValidHTML(str));