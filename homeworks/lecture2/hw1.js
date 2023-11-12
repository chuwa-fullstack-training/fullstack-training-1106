/*
* Copy the enumerable properties of p to o, and return o.
* If o and p have a property by the same name, o's property is overwritten.
* This function does not handle getters and setters or copy attributes.
*/
function extend(o, p) {
    for(let prop in p){
        o[prop] = p[prop];
    }
    return o;
}

// Test Cases:
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const obj3 = {};
const obj4 = { x: undefined, y: 10 };

const result1 = extend(obj1, obj2);
console.log(result1); // Output: { a: 1, b: 3, c: 4 }

const result2 = extend(obj3, obj4);
console.log(result2); // Output: { x: undefined, y: 10 }


/*
* Return a new object that holds the properties of both o and p.
* If o and p have properties by the same name, the values from o are used.
*/
function union(o, p) {
   let newObj = {};

    for(const prop in o){
        newObj[prop] = o[prop]
    }
    for(const prop in p){
        if(!(prop in o)){
            newObj[prop] = p[prop];
        }
    }
    return newObj;
}

const result3 = union(obj1, obj2);
console.log(result3) ; // Output: { a: 1, b: 2, c: 4 }

const result4 = union(obj3, obj4);
console.log(result4); // Output: { x: undefined, y: 10 }


/*
* Remove properties from o if there is not a property with the same name in p.
* Return o.
*/
function restrict(o, p) {
    for(let prop in o){
        if(!(prop in p)){
            delete(o[prop])
        }
    }
    return o;
}

const result5 = restrict(obj1, obj2);
console.log(result5) ; // Output: { b: 2 }

const result6 = restrict(obj3, obj4);
console.log(result6); // Output: {}


/*
* Return a new object that holds only the properties of o that also appear
* in p. This is something like the intersection of o and p, but the values of
* the properties in p are discarded
*/
function intersection(o, p) {
    let newObj = {};
    for(let prop in o){
        if(prop in p){
            newObj[prop] = o[prop]
        }
    }
    return newObj;
}

const result7 = intersection(obj1, obj2);
console.log(result7) ; // Output: { b: 2 }

const result8 = intersection(obj3, obj4);
console.log(result8); // Output: {}