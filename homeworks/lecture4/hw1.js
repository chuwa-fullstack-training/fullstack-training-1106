// HTML tag validation
// Write a function that validates whether HTML tags are paired correctly or not.
// Example:
// <html><head><title>My Title</title></head></html> - true
// <html><head><title>My Title</title></head></head></html> - false
// <html><head><title>My Title</title></head></html> - true

function checkValidHTML(html) {
    // implement your solution here
    const len = html.length;
    let check_stack = [];
    let temp = "";
    let i = 0;
    while (i < len) {
        if (html[i] == '<') {
            i++;
            if (html[i] == '/') {
                i++;
                while (html[i] != '>') {
                    temp += html[i];
                    i++;
                }
                if (check_stack.length == 0 || check_stack.pop() != temp) {
                    return false;
                }
            }
            else {
                while (html[i] != '>') {
                    temp += html[i];
                    i++;
                }
                check_stack.push(temp);
            }
        }
        i++;
        temp = "";
    }
    return check_stack.length == 0;
}

var test1 = "<html><head><title>My Title</title></head></html>";//true
var test2 = "<html><head><title>My Title</title></head></head></html>";//false
var test3 = "<html><head><title>My Title</title></head></html>"; //true
var test4 = "<html><head><title>My Title</title></head>"; //false
var test5 = "<html><head><title>My Title</head></title></html>"; //false
console.log(checkValidHTML(test1));
console.log(checkValidHTML(test2));
console.log(checkValidHTML(test3));
console.log(checkValidHTML(test4));
console.log(checkValidHTML(test5));
