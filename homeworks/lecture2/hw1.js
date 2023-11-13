const assert = require('assert');

/*
* Copy the enumerable properties of p to o, and return o.
* If o and p have a property by the same name, o's property is overwritten.
* This function does not handle getters and setters or copy attributes.
*/
function extend(o, p) {
    Object.entries(p).forEach(([key, val], _) => {
        o[key] = val;
    });
    return o;
}

/*
* Return a new object that holds the properties of both o and p.
* If o and p have properties by the same name, the values from o are used.
*/
function union(o, p) {
    // implement your code here
    let result = {};
    Object.entries(p).forEach(([key, val], _) => {
        result[key] = val;
    });
    Object.entries(o).forEach(([key, val], _) => {
        result[key] = val;
    });
    return result;
}

/*
* Remove properties from o if there is not a property with the same name in p.
* Return o.
*/
function restrict(o, p) {
    Object.keys(o).forEach((key) => {
        (!(key in p)) && (delete o[key]);
    });
    return o;
}

/*
* Return a new object that holds only the properties of o that also appear
* in p. This is something like the intersection of o and p, but the values of
* the properties in p are discarded
*/
function intersection(o, p) {
    let intersect = {};
    Object.keys(o).forEach((key) => {
        (key in p) && (intersect[key] = o[key]);
    });
    return intersect;
}

// Test cases for extend
let object1 = {};
let properties1 = { a: 1, b: 2 };
let extended1 = extend(object1, properties1);
assert.deepStrictEqual(extended1, { a: 1, b: 2 }, "Test 1 failed");

let object2 = { a: 1, b: 2 };
let properties2 = { b: 3, c: 4 };
let extended2 = extend(object2, properties2);
assert.deepStrictEqual(extended2, { a: 1, b: 3, c: 4 }, "Test 2 failed");

// Test cases for union
let object3 = {};
let properties3 = { a: 1, b: 2 };
let union3 = union(object3, properties3);
assert.deepStrictEqual(union3, { a: 1, b: 2 }, "Test 3 failed");

let object4 = { a: 1, b: 2 };
let properties4 = { b: 3, c: 4 };
let union4 = union(object4, properties4);
assert.deepStrictEqual(union4, { a: 1, b: 2, c: 4 }, "Test 4 failed");

// Test cases for restrict
let object5 = { a: 1, b: 2, c: 3 };
let properties5 = { a: 10, c: 30 };
let restricted5 = restrict(object5, properties5);
assert.deepStrictEqual(restricted5, { a: 1, c: 3 }, "Test 5 failed");

let object6 = { a: 1, b: 2 };
let properties6 = { a: 10, b: 20, c: 30 };
let restricted6 = restrict(object6, properties6);
assert.deepStrictEqual(restricted6, { a: 1, b: 2 }, "Test 6 failed");

// Test cases for intersection
let object7 = { a: 1, b: 2, c: 3 };
let properties7 = { a: 10, c: 30, d: 40 };
let result7 = intersection(object7, properties7);
assert.deepStrictEqual(result7, { a: 1, c: 3 }, "Test 7 failed");

let object8 = { a: 1, b: 2 };
let properties8 = { c: 30, d: 40 };
let result8 = intersection(object8, properties8);
assert.deepStrictEqual(result8, {}, "Test 8 failed");