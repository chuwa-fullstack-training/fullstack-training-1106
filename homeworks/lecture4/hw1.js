// HTML tag validation
// Write a function that validates whether HTML tags are paired correctly or not.
// Example:
// <html><head><title>My Title</title></head></html> - true
// <html><head><title>My Title</title></head></head></html> - false
// <html><head><title>My Title</title></head></html - true
class Stack {
    constructor() {
        this.arr = [];
    }

    push(str) {
        this.arr.push(str);
    }

    pop() {
        this.arr.pop();
    }

    top() {
        if (!this.isEmpty()) {
            return this.arr[this.arr.length - 1];
        }
        else {
            return undefined;
        }
    }

    isEmpty() {
        return this.arr.length == 0;
    }
}

function checkValidHTML(html) {
    // implement your solution here
    var html_length = html.length;
    var stack = new Stack();

    // // regex match the format <html>...</html>
    // const regex = /<html>.*<\/html>/g;
    // if (!html.match(regex)) {
    //     return false;
    // }

    for (let i=0; i<html_length; i++) {
        if (html[i] == "<") {
            let tag = "";
            let curr = i + 1;
            while (curr < html_length - 1 && html[curr] != ">") {
                if (html[curr] == "<") {
                    return false;
                }
                tag += html[curr];
                curr++;
            }

            if (tag.substring(1) == stack.top()) {
                stack.pop();
            }
            else {
                stack.push(tag);
            }
        }
    }

    // console.log(stack);
    if (stack.isEmpty()) {
        return true;
    }
    return false;
}

console.log(checkValidHTML('<html><head><title>My Title</title></head></html>'));
console.log(checkValidHTML('<html><head><title>My Title</title></head></head></html>'));
console.log(checkValidHTML('<html><head><title>My Title</title></head></html'));