// HTML tag validation
// Write a function that validates whether HTML tags are paired correctly or not.
// Example:
// <html><head><title>My Title</title></head></html> - true
// <html><head><title>My Title</title></head></head></html> - false
// <html><head><title>My Title</title></head></html - true


function checkValidHTML(html) {
    // const stack = [];
    // const tagRegex = /<\/?[^>]*>?/g;
  
    // let match;
    // while ((match = tagRegex.exec(html)) !== null) {
    //   const [fullTag, tagName] = match;
    //   if (fullTag.startsWith('</')) {
    //     if (stack.length === 0 || stack.pop() !== tagName) {
    //       return false; // 不匹配，返回 false
    //     }
    //   } else {
    //     stack.push(tagName);
    //   }
    // }
  
    // // 如果栈为空，则所有标签都正确配对
    // return stack.length === 0;
    const stack = [];
    const tagRegex = /<\/?[^>]*>?/g;

    let match;
    while ((match = tagRegex.exec(html)) !== null) {
        const [fullTag, tagName] = match;
        if (fullTag.startsWith('</')) {
            if (stack.length === 0 || stack.pop() !== tagName) return false;
        } else {
            stack.push(tagName);
        }
    }

    return stack.length === 0;

  }

// // Not correct:
// function checkValidHTML(html) {
//     const tagRegex = /<html[^>]*>(([^<>]*)|(<html[^>]*>(.*)<\/html>))<\/html>？/g;
//     return tagRegex.test(html);
// }


// 示例
console.log(checkValidHTML('<html><head><title>My Title</title></head></html>'));  // 输出: true
console.log(checkValidHTML('<html><head><title>My Title</title></head></head></html>'));  // 输出: false
console.log(checkValidHTML('<html><head><title>My Title</title></head></html'));  // 输出: true
