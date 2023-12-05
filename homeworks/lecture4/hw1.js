// HTML tag validation
// Write a function that validates whether HTML tags are paired correctly or not.
// Example:
// <html><head><title>My Title</title></head></html> - true
// <html><head><title>My Title</title></head></head></html> - false
// <html><head><title>My Title</title></head></html - true

function checkValidHTML(html) {
    // implement your solution here
    const stack = []
    const tagRegex = /<\/?[\w\s="']+>/g
    let tag;

    while ((tag = tagRegex.exec(html)) !== null) {
        const currentTag = tag[0];
        console.log(tag)
        if (currentTag[1] === '/') {
            // It's a closing tag
            const lastTag = stack.pop();
            // Compare without opening '<' and closing '>' and '/'
            if (lastTag === undefined || currentTag.slice(2, -1) !== lastTag.slice(1, -1)) {
                return false;
            }
        } else if (currentTag[currentTag.length - 2] !== '/') {
            // It's an opening tag and not self-closing
            stack.push(currentTag);
        }
    }

    return stack.length === 0;
}

console.log(checkValidHTML('<html><head><title>My Title</title></head></head></html>'))