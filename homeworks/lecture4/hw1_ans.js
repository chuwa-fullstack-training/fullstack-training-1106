// HTML tag validation
// Write a function that validates whether HTML tags are paired correctly or not.
// Example:
// <html><head><title>My Title</title></head></html> - true
// <html><head><title>My Title</title></head></head></html> - false
// <html><head><title>My Title</title></head></html - true

function checkValidHTML(html) {
    // implement your solution here
    let stack = [];
    let i = 0;
    while(i < html.length){
        if(html[i] === '<'){
            let end = html.indexOf('>', i+1);
            if(end === -1){
                return false;
            }
            let tag = html.substring(i+1, end);
            if(tag[0] === '/'){
                if(stack.length === 0){
                    return false;
                }else{
                    let front_tag = stack.pop();
                    if(!front_tag === tag.substring(1)){
                        return false;
                    }
                }
            }else{
                stack.push(tag);
            }
            i = end;
        }else{
            i += 1;
        }
    }
    return stack.length === 0;
}

var html1 = "<html><head><title>My Title</title></head></html>";
var html2 = "<html><head><title>My Title</title></head></head></html>";
var html3 = "<html><head><title>My Title</title></head></html";

console.log(checkValidHTML(html1));
console.log(checkValidHTML(html2));
console.log(checkValidHTML(html3));
