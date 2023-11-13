/*
* Copy the enumerable properties of p to o, and return o.
* If o and p have a property by the same name, o's property is overwritten.
* This function does not handle getters and setters or copy attributes.
*/
function extend(o, p) {
    // implement your code here
    // Method 1:
    for (let prop in p) {
        if (p.hasOwnProperty(prop)) {
            Object.defineProperty(o, prop, Object.getOwnPropertyDescriptor(p, prop));
        }
    }
    return o;
    // Method 2:
    for (let prop in p) {
        if (p.hasOwnProperty(prop)) {
            o[prop] = p[prop];
        }
    }
    return o;
}

var obj1 = { a: 1, b: 2 };
var obj2 = { b: 3, c: 4 };
var result = extend(obj1, obj2);
console.log(result); 

/*
* Return a new object that holds the properties of both o and p.
* If o and p have properties by the same name, the values from o are used.
*/
function union(o, p) {
    // implement your code here
    let result = {};
    // Method 1:
    for (let prop in o) {
        if (o.hasOwnProperty(prop)) {
            Object.defineProperty(result, prop, Object.getOwnPropertyDescriptor(o, prop));
        }
    }
    for (let prop in p) {
        if (p.hasOwnProperty(prop) && !result.hasOwnProperty(prop)) {
            Object.defineProperty(result, prop, Object.getOwnPropertyDescriptor(p, prop));
        }
    }
    return result;
    // Method 2:
    for (let prop in o) {
        if (o.hasOwnProperty(prop)) {
            result[prop] = o[prop];
        }
    }
    for (let prop in p) {
        if (p.hasOwnProperty(prop) && !result.hasOwnProperty(prop)) {
            result[prop] = p[prop];
        }
    }
    return result;
}

var obj1 = { a: 1, b: 2 };
var obj2 = { b: 3, c: 4 };
var result = union(obj1, obj2);
console.log(result);

/*
* Remove properties from o if there is not a property with the same name in p.
* Return o.
*/
function restrict(o, p) {
    // implement your code here
    for (let prop in o) {
        if (o.hasOwnProperty(prop) && !p.hasOwnProperty(prop)) {
            delete o[prop];
        }
    }
    return o;
}

var obj1 = { a: 1, b: 2 };
var obj2 = { b: 3, c: 4 };
var result = restrict(obj1, obj2);
console.log(result);


/*
* Return a new object that holds only the properties of o that also appear
* in p. This is something like the intersection of o and p, but the values of
* the properties in p are discarded
*/
function intersection(o, p) {
    // implement your code here
    // Method 1:
    let result = {};
    for (let prop in o) {
        if (o.hasOwnProperty(prop) && p.hasOwnProperty(prop)) {
            Object.defineProperty(result, prop, Object.getOwnPropertyDescriptor(o, prop));
        }
    }
    return result;
    // Method 2:
    for (let prop in o) {
        if (o.hasOwnProperty(prop) && p.hasOwnProperty(prop)) {
            result[prop] = o[prop];
        }
    }
    return result;
}

var obj1 = { a: 1, b: 2 };
var obj2 = { b: 3, c: 4 };
var result = intersection(obj1, obj2);
console.log(result);