/*
* Copy the enumerable properties of p to o, and return o.
* If o and p have a property by the same name, o's property is overwritten.
* This function does not handle getters and setters or copy attributes.
*/
function extend(o, p) {
    // implement your code here
    for (let prop in p){
        o[prop] = p[prop]
    }
    return o
}

/*
* Return a new object that holds the properties of both o and p.
* If o and p have properties by the same name, the values from o are used.
*/
function union(o, p) {
    // implement your code here
    var u = {}
    for (let prop in p){
        u[prop] = p[prop]
    }
    for (let prop in o){
        u[prop] = o[prop]
    }
    return u
}

/*
* Remove properties from o if there is not a property with the same name in p.
* Return o.
*/
function restrict(o, p) {
    // implement your code here
    for (let prop in o){
        if (!(prop in p)) { // if the property is not in p
            delete o[prop]; // delete it from o
        }
    }
    return o;
}

/*
* Return a new object that holds only the properties of o that also appear
* in p. This is something like the intersection of o and p, but the values of
* the properties in p are discarded
*/
function intersection(o, p) {
    // implement your code here
    let i = {}
    for (let prop in o){
        if (prop in p){
            i[prop] = o[prop];
        }
    }
    return i
}