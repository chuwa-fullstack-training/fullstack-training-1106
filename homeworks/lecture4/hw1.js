// HTML tag validation
// Write a function that validates whether HTML tags are paired correctly or not.
// Example:
// <html><head><title>My Title</title></head></html> - true
// <html><head><title>My Title</title></head></head></html> - false
// <html><head><title>My Title</title></head></html - true

function checkValidHTML(html) {
    const tags = html.match(/<[^>]+>/g);
    console.log(tags);
    const stack = [];
    for (let i = 0; i < tags.length; i++){
        const tag = tags[i];
        if (tag[1] === '/'){
            const lastTag = stack.pop();
            if (lastTag !== tag.slice(2, -1)){
                return false;
            }
        } else {
            stack.push(tag.slice(1, -1));
        }
    }
    return stack.length === 0;
}
console.log(checkValidHTML("<html><head><title>My Title</title></head></html>"));
console.log(checkValidHTML("<html><head><title>My Title</title></head></head></html>"));
console.log(checkValidHTML("<html><head><title>My Title</title></head></html>"));