/*
* Copy the enumerable properties of p to o, and return o.
* If o and p have a property by the same name, o's property is overwritten.
* This function does not handle getters and setters or copy attributes.
*/
function extend(o, p) {
    // implement your code here
    for (let key in p) {
        o[key] = p[key];
    }
    return o;
}
// extend()测试
let o = {
    name: "Bella",
    age: 24,
};
let p = {
    name: "Bei Deng",
    major: "Computer Science"
};
console.log(extend(o, p));//{ name: 'Bei Deng', age: 24, major: 'Computer Science' }

/*
* Return a new object that holds the properties of both o and p.
* If o and p have properties by the same name, the values from o are used.
*/
function union(o, p) {
    // implement your code here
    const new_obj = {};
    for (let key in p) {
        new_obj[key] = p[key];
    }
    for (let key in o) {
        new_obj[key] = o[key];
    }
    return new_obj;
}
// union()测试
let o1 = {
    name: "Bella",
    age: 24,
};
let p1 = {
    name: "Bei Deng",
    major: "Computer Science"
};
console.log(union(o1, p1));

/*
* Remove properties from o if there is not a property with the same name in p.
* Return o.
*/
function restrict(o, p) {
    // implement your code here
    for (let key in o) {
        if (!p.hasOwnProperty(key)) {
            delete o[key];
        }
    }
    return o;
}
// restrict()测试
let o2 = {
    name: "Bella",
    age: 24,
};
let p2 = {
    name: "Bei Deng",
    major: "Computer Science"
};
console.log(restrict(o2, p2));

/*
* Return a new object that holds only the properties of o that also appear
* in p. This is something like the intersection of o and p, but the values of
* the properties in p are discarded
*/
function intersection(o, p) {
    // implement your code here
    const new_obj = {};
    for (let key in o) {
        if (p.hasOwnProperty(key)) {
            new_obj[key] = o[key];
        }
    }
    return new_obj;
}
// intersection()测试
let o3 = {
    name: "Bella",
    age: 24,
};
let p3 = {
    name: "Bei Deng",
    age: 18,
    major: "Computer Science"
};
console.log(intersection(o3, p3));