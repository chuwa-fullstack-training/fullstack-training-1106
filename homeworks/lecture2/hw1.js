/*
* Copy the enumerable properties of p to o, and return o.
* If o and p have a property by the same name, o's property is overwritten.
* This function does not handle getters and setters or copy attributes.
*/
function extend(o, p) {
    // copy all property including prototype
    for (let property in p) {
        o[property] = p[property];
    }
    return o;
}

/*
* Return a new object that holds the properties of both o and p.
* If o and p have properties by the same name, the values from o are used.
*/
function union(o, p) {
    var result = {};
    for (let property in p) {
        result[property] = p[property];
    }

    for (let property in o) {
        result[property] = o[property];
    }

    return result;
}

/*
* Remove properties from o if there is not a property with the same name in p.
* Return o.
*/
function restrict(o, p) {
    for (let property in o) {
        if (!p.hasOwnProperty(property)) {
            delete o[property];
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
    var result = {};
    for (let property in o) {
        if (p.hasOwnProperty(property)) {
            result[property] = o[property];
        }
    }
    return result;
}