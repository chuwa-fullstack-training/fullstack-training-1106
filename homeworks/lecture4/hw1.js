// HTML tag validation
// Write a function that validates whether HTML tags are paired correctly or not.
// Example:
// <html><head><title>My Title</title></head></html> - true
// <html><head><title>My Title</title></head></head></html> - false
// <html><head><title>My Title</title></head></html - false

function checkValidHTML(html) {
    // implement your solution here
    const regex = /<\/?.+?>/gi;
    
    const singleTag = ['<br>', '<img>', '<input>', '<hr>', '<meta>', '<link>'];
    let tags = html.match(regex);
    let stack = [];

    for (let tag of tags){
        if(singleTag.includes(tag)){
            continue;
        }

        if(stack.length == 0 || tag.charAt(1)!=='/'){
            stack.push(tag);
        }
        else{
            if(stack.pop().substring(1) !== tag.substring(2)){
                return false;
            }
        }
    }

    return stack.length === 0;
}

console.log(checkValidHTML("<html><head><title>My Title</title></head></html>"));
console.log(checkValidHTML("<html><head><title>My Title</title></head></head></html>"));
console.log(checkValidHTML("<html><head><title>My Title</title></head></html"));
