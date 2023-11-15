// HTML tag validation
// Write a function that validates whether HTML tags are paired correctly or not.
// Example:
// <html><head><title>My Title</title></head></html> - true
// <html><head><title>My Title</title></head></head></html> - false
// <html><head><title>My Title</title></head></html - true

function checkValidHTML(html) {
    // implement your solution here
    const regex = /<([^>]+)>/g; // all string between < and >
    const endRegex = /<\/[^>]+$/; // last string after </ and no >
    const result = [...html.matchAll(regex)];
    const endResult = html.match(endRegex);
    const tags = result.reduce((all, curr) => {
        all.push(curr[1]);
        return all;
    }, []);
    if(endResult) {
        tags.push(endResult[0].slice(1));
    }
    // console.log(tags);
    const stack = [];
    for(let i = 0; i < tags.length; i++) {
        stack.push(tags[i]);
        const close = stack[stack.length-1];
        const open = stack[stack.length-2];
        // console.log(open, " : ", close);
        if('/' + open === close) {
            stack.pop();
            stack.pop();
        }
    }
    return stack.length === 0;
}

const test1 = '<html><head><title>My Title</title></head></html>';
console.log(checkValidHTML(test1));
const test2 = '<html><head><title>My Title</title></head></head></html>';
console.log(checkValidHTML(test2));
const test3 = '<html><head><title>My Title</title></head></html';
console.log(checkValidHTML(test3));