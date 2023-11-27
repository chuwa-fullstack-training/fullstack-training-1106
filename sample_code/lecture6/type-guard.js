function prettyPrint(strs) {
    if (strs === null) {
        console.log('null');
    }
    else if (typeof strs === 'string') {
        console.log(strs);
    }
    else {
        console.log(strs.join(' + '));
    }
}
prettyPrint('hello');
prettyPrint(['hello', 'world']);
prettyPrint(null);
function prettyPrint2(strs) {
    if (strs) {
        if (Array.isArray(strs)) {
            console.log(strs.join(' + '));
        }
        else {
            console.log(strs);
        }
    }
}
