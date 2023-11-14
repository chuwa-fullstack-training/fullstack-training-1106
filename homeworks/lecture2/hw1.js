/*
 * Copy the enumerable properties of p to o, and return o.
 * If o and p have a property by the same name, o's property is overwritten.
 * This function does not handle getters and setters or copy attributes.
 */
function extend(o, p) {
  // implement your code here
  for (let key in p) {
    o[key] = p[key];
  }
  o.__proto__ = p.__proto__;
  return o;
}

/*
 * Return a new object that holds the properties of both o and p.
 * If o and p have properties by the same name, the values from o are used.
 */
function union(o, p) {
  // implement your code here
  let newObj = {};

  // functional programming approach
  Object.keys(p).forEach((k) => (newObj[k] = p[k]));
  Object.keys(o).forEach((k) => (newObj[k] = o[k]));
  newObj.__proto__ = o.__proto__;
  return newObj;
}

/*
 * Remove properties from o if there is not a property with the same name in p.
 * Return o.
 */
function restrict(o, p) {
  // implement your code here
  for (let k in o) {
    if (!(k in p)) {
      delete o[k];
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
  let newObj = {};

  for (let k in o) {
    if (k in p) {
      newObj[k] = o[k];
    }
  }

  return newObj;
}

// extend test case:
console.log("Extend:");
let o = {
  name: "hello",
  age: 5,
};

let p = {
  age: 25,
  major: "computer science",
  gpa: 3.5,
};

console.log(extend(o, p));
console.log(o);
console.log(p);
// union test case:
console.log("Union:");
let person = {
  isHuman: true,
};
let a = {
  firstName: "Sam",
  age: 20,
};

let b = {
  lastName: "Lin",
  age: 28,
};
a.__proto__ = person;

let aUb = union(a, b);
console.log(aUb);
console.log(a);
console.log(b);

// restrict test case:
console.log("restrict:");
person = {
  isHuman: true,
};
a = {
  firstName: "Sam",
  age: 20,
};

b = {
  lastName: "Lin",
  age: 28,
};
a.__proto__ = person;

let aRb = restrict(a, b);
console.log(aRb);
console.log(a);
console.log(b);

// intersection test case:
console.log("intersection");
person = {
  isHuman: true,
};
a = {
  firstName: "Sam",
  age: 20,
};

b = {
  lastName: "Lin",
  age: 28,
};
a.__proto__ = person;
let aIb = intersection(a, b);
console.log(aIb);
console.log(a);
console.log(b);
