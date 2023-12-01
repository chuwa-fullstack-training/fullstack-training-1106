/*
* Copy the enumerable properties of p to o, and return o.
* If o and p have a property by the same name, o's property is overwritten.
* This function does not handle getters and setters or copy attributes.
*/
function extend(o, p) {
    // implement your code here
    // for(let key in p){
    //     o[key] = p[key];
    // }
    // return o;
    /////////////////////
    // let props = Object.entries(p);
    // props.forEach(([key,value])=>{
    //     o[key] = value;
    // })
    // return o;
    /////////////////////////
    let keys = Object.keys(p);
    for(let key of keys){
        o[key] = p[key];
    }
    return o;

}

// let p={stu1:'Donna', stu2:'Jack'};
// let o = {stu2:'Tom'};
// extend(o,p);
// console.log('test extend: ',o);

/*
* Return a new object that holds the properties of both o and p.
* If o and p have properties by the same name, the values from o are used.
*/
function union(o, p) {
    // implement your code here
    // let uniObj = {...p,...o};
    // return uniObj;
    ////////////////
    let uniObj = Object.assign({},p,o);
    return uniObj;
}
// let p={stu1:'Donna', stu2:'Jack'};
// let o = {stu2:'Tom'};

// console.log('test union: ',union(o,p));
/*
* Remove properties from o if there is not a property with the same name in p.
* Return o.
*/
function restrict(o, p) {
    // implement your code here
    for(let key in o){
        if(p[key] === undefined){
            delete o[key];
        }
    }
    return o;
}
// let p={stu1:'Donna', stu2:'Jack'};
// let o = {stu2:'Tom', stu3:'Frank'};

// console.log('test restrict: ',restrict(o,p));
/*
* Return a new object that holds only the properties of o that also appear
* in p. This is something like the intersection of o and p, but the values of
* the properties in p are discarded
*/
function intersection(o, p) {
    // let newObj = new Object(o);//this is not correct because it only create a shallow copy(or reference);
    let newObj = Object.assign({},o);
    let keys = Object.keys(newObj);
    keys.forEach(key=>{
        if(p[key] === undefined){
            delete newObj[key];
        }
    })
    return newObj;   
}
// let p={stu1:'Donna', stu2:'Jack',stu3:'Frank'};
// let o = {stu2:'Tom', stu3:'Frank',stu4: 'Mary'};
// console.log(intersection(o,p));
