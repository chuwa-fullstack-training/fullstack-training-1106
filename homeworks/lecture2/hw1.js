/*
* Copy the enumerable properties of p to o, and return o.
* If o and p have a property by the same name, o's property is overwritten.
* This function does not handle getters and setters or copy attributes.
*/
function extend(o, p) {
    // implement your code here
    Object.assign(o,p);
    return o;
}

/*
* Return a new object that holds the properties of both o and p.
* If o and p have properties by the same name, the values from o are used.
*/
function union(o, p) {
    // implement your code here
    obj = {};
    Object.assign(obj,o);
    Object.assign(obj,p);
    
}

/*
* Remove properties from o if there is not a property with the same name in p.
* Return o.
*/
function restrict(o, p) {
    // implement your code here
    for(let key in o){
        //console.log(key);
        if(!(key in p)){
            delete o[key];
        }
    }
}
o = {a:1,b:2,c:3,d:4};
p = {c:1,m:3,f:4,d:5};
restrict(o,p);
Object.keys(o).forEach(element => {
    console.log(element);
});

/*
* Return a new object that holds only the properties of o that also appear
* in p. This is something like the intersection of o and p, but the values of
* the properties in p are discarded
*/
function intersection(o, p) {
    // implement your code here
    res = {};
    for(let key in o){
        if(key in p){
            res[key] = o[key];
        }
    }
    return res;
}

ans = intersection(o,p);
console.log(ans);