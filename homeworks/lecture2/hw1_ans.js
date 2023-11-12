/*
* Copy the enumerable properties of p to o, and return o.
* If o and p have a property by the same name, o's property is overwritten.
* This function does not handle getters and setters or copy attributes.
*/
function extend(o, p) {
    // implement your code here
    for(var property in p){
        o[property] = p[property];
    }

    return o;
}
/*
* Return a new object that holds the properties of both o and p.
* If o and p have properties by the same name, the values from o are used.
*/
function union(o, p) {
    result = {}
    for(var prop in p){
        result[prop] = p[prop];
    }
    for(var prop in o){
        result[prop] = o[prop];
    }
    return result;
}


/*
* Remove properties from o if there is not a property with the same name in p.
* Return o.
*/
function restrict(o, p) {
    // implement your code here
    let propInP = new Set();
    for(var prop in p){
        propInP.add(prop);
    }
    for(var prop in o){
        if(!propInP.has(prop)){
            delete o[prop];
        }
    }
    return o
}

/*
* Return a new object that holds only the properties of o that also appear
* in p. This is something like the intersection of o and p, but the values of
* the properties in p are discarded
*/
function intersection(o, p) {
    // implement your code here
    let propInP = new Set();
    let result = {};
    for(var prop in p){
        propInP.add(prop);
    }
    for(var prop in o){
        if(propInP.has(prop)){
            result[prop] = o[prop];
        }
    }
    return result;
}

//test part
var objA = { a: 1, b: 2 };
var objB = { b: 3, c: 4 };
e = extend(objA, objB);
inter = intersection(objA, objB);
u = union(objA, objB);
d = restrict(objA, objB)
console.log(d);