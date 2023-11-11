/*
 * Copy the enumerable properties of p to o, and return o.
 * If o and p have a property by the same name, o's property is overwritten.
 * This function does not handle getters and setters or copy attributes.
 */
function extend(o, p) {
  // implement your code here
  for (let prop in p) {
    if (p.hasOwnProperty(prop)) {
      o[prop] = p[prop];
    }
  }
  return o;
}

o = {
  debian: 1,
  ubuntu: 2,
  func: function sum() {
    return 1;
  },
};

p = {
  debian: 2,
  centos: 3,
};
console.log("o: ", o);
console.log("p: ", p);
/*
 * Return a new object that holds the properties of both o and p.
 * If o and p have properties by the same name, the values from o are used.
 */
function union(o, p) {
  // implement your code here
  n = {};
  for (let prop in p) {
    if (p.hasOwnProperty(prop)) {
      n[prop] = p[prop];
    }
  }
  for (let prop in o) {
    if (o.hasOwnProperty(prop)) {
      n[prop] = o[prop];
    }
  }
  return n;
}

// console.log(union(o, p));
/*
 * Remove properties from o if there is not a property with the same name in p.
 * Return o.
 */
function restrict(o, p) {
  // implement your code here
  for (let prop in o) {
    if (!p.hasOwnProperty(prop)) {
      delete o[prop];
    }
  }
  return o;
}

// console.log(restrict(o, p));

/*
 * Return a new object that holds only the properties of o that also appear
 * in p. This is something like the intersection of o and p, but the values of
 * the properties in p are discarded
 */
function intersection(o, p) {
  // implement your code here
  let n = {};
  for(let prop in o) {
    if(p.hasOwnProperty(prop)) {
        n[prop] = o[prop];
    }
  }
  return n;
}
console.log(intersection(o, p));
