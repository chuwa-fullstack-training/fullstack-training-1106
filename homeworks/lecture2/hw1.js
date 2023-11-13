/*
* Copy the enumerable properties of p to o, and return o.
* If o and p have a property by the same name, o's property is overwritten.
* This function does not handle getters and setters or copy attributes.
*/
function extend(o, p) {
    // implement your code here
    for (let property in p) {
        o[property] = p[property]
    }
    return o;
}

// extend() test
let o1 = {
    name: "Ethan",
    gender: "Male",
    state: "CA"
};
let p1 = {
    name: "Xiongsheng Yi",
    major: "Computer Science",
    country: "USA"
};
console.log("The result of extend() is: ", extend(o1, p1));
/*
The result of extend() is:  {
  name: 'Xiongsheng Yi',
  gender: 'Male',
  state: 'CA',
  major: 'Computer Science',
  country: 'USA'
}
*/

/*
* Return a new object that holds the properties of both o and p.
* If o and p have properties by the same name, the values from o are used.
*/
function union(o, p) {
    // implement your code here
    let newObj = {};
    for (let property in p) {
        newObj[property] = p[property];
    }
    for (let property in o) {
        newObj[property] = o[property];
    }
    return newObj;
}

// union() test
let o2 = {
    name: "Ethan",
    gender: "Male",
    state: "CA"
};
let p2 = {
    name: "Xiongsheng Yi",
    major: "Computer Science",
    country: "USA"
};
console.log("The result of union() is: ", union(o2, p2));
/*
The result of union() is:  {
  name: 'Ethan',
  major: 'Computer Science',
  country: 'USA',
  gender: 'Male',
  state: 'CA'
}
*/

/*
* Remove properties from o if there is not a property with the same name in p.
* Return o.
*/
function restrict(o, p) {
    // implement your code here
    for (let property in o) {
        if (p[property] == undefined) {
            delete o[property];
        }
    }
    return o;
}

// restrict() test
let o3 = {
    name: "Ethan",
    gender: "Male",
    state: "CA"
};
let p3 = {
    name: "Xiongsheng Yi",
    major: "Computer Science",
    country: "USA"
};
console.log("The result of restrict() is: ", restrict(o3, p3));
// The result of restrict() is:  { name: 'Ethan' }

/*
* Return a new object that holds only the properties of o that also appear
* in p. This is something like the intersection of o and p, but the values of
* the properties in p are discarded
*/
function intersection(o, p) {
    // implement your code here
    let newObj = {};
    for (let prop in o) {
        if (p[prop] != undefined) {
            newObj[prop] = o[prop];
        }
    }
    return newObj;
}

// intersection() test
let o4 = {
    name: "Ethan",
    gender: "Male",
    state: "CA"
};
let p4 = {
    name: "Xiongsheng Yi",
    major: "Computer Science",
    country: "USA"
};
console.log("The result of intersection() is: ", intersection(o4, p4));
// The result of intersection() is:  { name: 'Ethan' }