/*
* Copy the enumerable properties of p to o, and return o.
* If o and p have a property by the same name, o's property is overwritten.
* This function does not handle getters and setters or copy attributes.
*/
function extend(o, p) {
    // implement your code here
    Object.entries(p).forEach(([key, val]) => {
        if (o[key] !== undefined) {
            o[key] = val;
        }
    })
}

var o = {name: "John", age: 12, gender: "male", id: 123};
var p = {name: "Fiona", gender: "female", id: 122, height: 160};
extend(o, p);
console.log(o);
console.log("====================================================");


/*
* Return a new object that holds the properties of both o and p.
* If o and p have properties by the same name, the values from o are used.
*/
function union(o, p) {
    // implement your code here
    const r = {...p, ...o};
    return r
}

o = {name: "John", age: 12, gender: "male", id: 123};
p = {name: "Fiona", gender: "female", id: 122, height: 160};
var r = union(o, p);
console.log(r);
console.log("====================================================");


/*
* Remove properties from o if there is not a property with the same name in p.
* Return o.
*/
function restrict(o, p) {
    // implement your code here
    Object.keys(o).forEach(key => {
        if (p[key] === undefined) {
            delete o[key];
        }
    })
    return o;
}

o = {name: "John", age: 12, gender: "male", id: 123};
p = {name: "Fiona", gender: "female", id: 122, height: 160};
o = restrict(o, p);
console.log(o);
console.log("====================================================");


/*
* Return a new object that holds only the properties of o that also appear
* in p. This is something like the intersection of o and p, but the values of
* the properties in p are discarded
*/
function intersection(o, p) {
    // implement your code here
    const inter = {}
    Object.entries(o).forEach(([key, val]) => {
        if (p[key] !== undefined) {
            on[key] = val;
        }
    })
    return inter;
}

o = {name: "John", age: 12, gender: "male", id: 123};
p = {name: "Fiona", gender: "female", id: 122, height: 160};
inter = restrict(o, p);
console.log(inter);