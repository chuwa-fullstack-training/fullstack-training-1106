// HTML tag validation
// Write a function that validates whether HTML tags are paired correctly or not.
// Example:
// <html><head><title>My Title</title></head></html> - true
// <html><head><title>My Title</title></head></head></html> - false
// <html><head><title>My Title</title></head></html - true

function checkValidHTML(html) {
    const stack = [];
    let currentTag = '';
    let isTag = false;

    for (let i = 0; i < html.length; i++) {
        let char = html[i];

        if (char === '<') {
            isTag = true;
            currentTag = '';
        } else if (char === '>' || i === html.length - 1) {
            if (isTag) {
                if (currentTag[0] === '/') {
                    if (i === html.length - 1 && html[i] !== '>'){
                        let tagName = currentTag.substring(1);
                        tagName += html[i];
                        if (stack.length === 0 || stack.pop() !== tagName) {
                            return false;
                        }
                    }
                    else{
                        let tagName = currentTag.substring(1);
                        if (stack.length === 0 || stack.pop() !== tagName) {
                            return false;
                        }
                    }
                } 
                else {
                    stack.push(currentTag);
                }
            }
            isTag = false;
        } else if (isTag) {
            currentTag += char;
        }
    }
    return stack.length === 0;
}