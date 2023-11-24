/*
* Copy the enumerable properties of p to o, and return o.
* If o and p have a property by the same name, o's property is overwritten.
* This function does not handle getters and setters or copy attributes.
*/
function extend(o, p) {
    // implement your code here
    Object.entries(p).forEach(entries => {
        o[entries[0]] = entries[1];
    });
    return o;
}

/*
* Return a new object that holds the properties of both o and p.
* If o and p have properties by the same name, the values from o are used.
*/
function union(o, p) {
    // implement your code here
    const new_obj = p;
    Object.entries(o).forEach(entries => {
        new_obj[entries[0]] = entries[1];
    });
    return new_obj;
}

/*
* Remove properties from o if there is not a property with the same name in p.
* Return o.
*/
function restrict(o, p) {
    // implement your code here
    Object.keys(o).forEach(key => {
        if (!(key in p)) {
            delete o[key];
        }
    });
    return o;
}

/*
* Return a new object that holds only the properties of o that also appear
* in p. This is something like the intersection of o and p, but the values of
* the properties in p are discarded
*/
// self-explaining: want properties appears both in o and p, use o values
function intersection(o, p) {
    // implement your code here
    const new_obj = o;
    Object.entries(new_obj).forEach(entries => {
        const key = entries[0];
        if (!(key in p)) {
            delete new_obj[key];
        }
    })
    return new_obj;
}


// write a test function for myself to check if my functions above are correct
function test() {
    const o = {
        id: 1,
        name: 'o',
        location: '1 main st',
        city: 'Seattle'
    };
    const p = {
        id: 2,
        name: 'p',
        city: 'Seattle',
        state: 'WA'
    };
    // console.log(extend(o, p));
    // console.log(union(o, p));
    // console.log(restrict(o, p));
    console.log(intersection(o, p));
}

test();