// HTML tag validation
// Write a function that validates whether HTML tags are paired correctly or not.
// Example:
// <html><head><title>My Title</title></head></html> - true
// <html><head><title>My Title</title></head></head></html> - false
// <html><head><title>My Title</title></head></html - true

function checkValidHTML(html) {
    // regex for html tags
    const tagRegex = /<\/?[^>]+>/g;

    // standalone tags
    const standaloneTags = ['<br>', '<img>', '<meta>', '<link>', '<input>'];

    let stack = [];

    let tags = html.match(tagRegex);

    for (let tag of tags) {
        // skip the standalone tag
        if (standaloneTags.includes(tag)) {
            continue;
        }

        if (tag[1] !== '/') {
            stack.push(tag);
        } else {
            if (stack.length === 0) return false;

            let lastTag = stack.pop();

            // compare the tag name
            if (tag.slice(2, -1) !== lastTag.slice(1, -1)) {
                return false;
            }
        }
    }
    return stack.length === 0;
}

const tags1 = '<html><head><title>My Title</title></head></html>';
const tags2 = '<html><head><title>My Title</title></head></head></html>';
const tags3 = '<html><head><title>My Title</title></head></html';
const tags4 = '<html><head><title>My Title</title></head></html><br>';

console.log(checkValidHTML(tags1));
console.log(checkValidHTML(tags2));
console.log(checkValidHTML(tags3));
console.log(checkValidHTML(tags4));