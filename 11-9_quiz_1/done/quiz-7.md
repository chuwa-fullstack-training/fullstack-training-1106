what is the result of ["1","2","3"].map(parseInt) ? Why [JS]


Answer:


["1","2","3"].map((value, index)=> {
  return parseInt(value, index);
});



// parseInt(string, radix) -> map(parseInt(value, index))
/* first iteration  (index is 0): */ parseInt("1", 0); // 1, 0 or not provided, the radix will be inferred based on string's value
/* second iteration (index is 1): */ parseInt("2", 1); // NaN, if it's nonzero and outside the range of [2, 36], always return NaN
/* third iteration  (index is 2): */ parseInt("3", 2); // NaN, 3 is not valid in binary















