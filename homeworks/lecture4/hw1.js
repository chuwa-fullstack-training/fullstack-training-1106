// HTML tag validation
// Write a function that validates whether HTML tags are paired correctly or not.
// Example:
// <html><head><title>My Title</title></head></html> - true
// <html><head><title>My Title</title></head></head></html> - false
// <html><head><title>My Title</title></head></html - true

function checkValidHTML(html) {
    // implement your solution here
    const htmlRegex = /<\/?[\w\s="']+(\/)?>/g;
    const wordRegex =  /\b\w+\b/g;
    let tags = html.match(htmlRegex);
    let tagStack = [];
    // console.log('tages: ',tags);
    if(tags.length === 0){
        return true;
    }
    for(let tag of tags){
        // let tagInner = tag.match(wordRegex);
        if(tag.startsWith('</')){//if closing tag
            if(tagStack.pop() !== tag.match(wordRegex)[0]){
                return false;
            }
           
        }else{//if opening tag
            tagStack.push(tag.match(wordRegex)[0]);
        }
    }
    if(tagStack.length !== 0){
        return false;
    }
    return true;
}

/////////////////////////////// test cases  ////////////////////////////////////////////
console.log(checkValidHTML('<html><head><title>My Title</title></head></html>'));
console.log(checkValidHTML('<html><head><title>My Title</title></head></head></html>'));
console.log(checkValidHTML('<html><head><title>My Title</title></head></html>'));