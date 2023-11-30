// HTML tag validation
// Write a function that validates whether HTML tags are paired correctly or not.
// Example:
// <html><head><title>My Title</title></head></html> - true
// <html><head><title>My Title</title></head></head></html> - false
// <html><head><title>My Title</title></head></html - true

function checkValidHTML(html) {
    // implement your solution here
    let tagCount = 0;
    const regex = /<([^s>]+)(\s[^>]*|)>/g;
    let match;
    while((match = regex.exec(html)) !== null) {
        const [, tag] = match;
        if(!tag.startsWith('/')){
            tagCount += 1;
        } else{
            tagCount -= 1;
            if(tagCount < 0){
                return false;
            }
        }
    }
    return tagCount === 0;
}