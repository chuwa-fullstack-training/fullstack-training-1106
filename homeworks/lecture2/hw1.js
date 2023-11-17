/*
* Copy the enumerable properties of p to o, and return o.
* If o and p have a property by the same name, o's property is overwritten.
* This function does not handle getters and setters or copy attributes.
*/
function extend(o, p) {
    // implement your code here
    for (let prop of Object.keys(p)) {
        o[prop] = p[prop];
    }

    return o;
}

/*
* Return a new object that holds the properties of both o and p.
* If o and p have properties by the same name, the values from o are used.
*/
function union(o, p) {
    // implement your code here
    let res = {...o};

    for (let prop of Object.keys(p)) {
        if(Object.hasOwn(o, prop)){
            res[prop] = o[prop];
        }
        else{
            res[prop] = p[prop];
        }
    }

    return res;
}

/*
* Remove properties from o if there is not a property with the same name in p.
* Return o.
*/
function restrict(o, p) {
    // implement your code here
    for (let prop of Object.keys(o)) {
        if(!Object.hasOwn(p, prop)){
            delete o[prop];
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
    let res = {};

    for (let prop of Object.keys(o)) {
        if(Object.hasOwn(p, prop)){
            res[prop] = o[prop];
        }
    }

    return res;
}

let o1 = {id: 1, name:"haoru"};
let p1 = {id: 2, name:"Amy", length:10};
extend(o1,p1)
console.log(o1);

let o2 = {id: 1, name:"haoru"};
let p2 = {id: 2, name:"Amy", length:10};
let Union = union(o2,p2);
console.log(Union);

let o3 = {id: 1, name:"haoru", school: "CQU", length:10};
let p3 = {id: 2, name:"Amy"};
restrict(o3,p3);
console.log(o3);

let o4 = {id: 1, name:"haoru", school: "CQU"};
let p4 = {id: 2, school: "NEU", length:10};
let Inter = intersection(o4,p4);
console.log(Inter);
