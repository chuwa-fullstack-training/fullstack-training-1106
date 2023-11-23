// HTML tag validation
// Write a function that validates whether HTML tags are paired correctly or not.
// Example:
// <html><head><title>My Title</title></head></html> - true
// <html><head><title>My Title</title></head></head></html> - false
// <html><head><title>My Title</title></head></html> - true

function checkValidHTML(html) {
    // implement your solution here
    var countAngle = 0;
    var countPair = 0;
    var stack = []
    for(let c of html){
        if( stack.length == 0 && c !== '<' ) return false;
        if(stack.length != 0 && c === '>') return false;
        if(c != '<') stack.push(c);
        if(c === '>'){
            while(stack.length != 0)
        }
        if(c === '>'){
            countAngle--;
        }
        if (countAngle < 0) return false;
    }
}