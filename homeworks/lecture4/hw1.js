// HTML tag validation
// Write a function that validates whether HTML tags are paired correctly or not.
// Example:
// <html><head><title>My Title</title></head></html> - true
// <html><head><title>My Title</title></head></head></html> - false
// <html><head><title>My Title</title></head></html - true

function checkValidHTML(html) {
    const stack = [];
    const tagpattarn = /<\/?[\w\s="'-]+\/?>/g;
    const tags = html.match(tagpattarn);

    for (const tag of tags) {
        if (tag.startsWith('</')) {
            if (stack.length === 0) {
                return false;
            }
            const openingTag = stack.pop();
            if (tag !== `</${openingTag}>`) {
                return false;
            }
        } else if (tag.endsWith('/>')) {
        } else {
            stack.push(tag.slice(1, -1));
        }
    }

    return stack.length === 0;
}


console.log(checkValidHTML("<html><head><title>Haopeng</title></head></html>")); // true

