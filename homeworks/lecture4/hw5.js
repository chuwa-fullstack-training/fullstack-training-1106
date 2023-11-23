// write a function to deep clone an object with circular reference
//
// const data = {
//     name: 'foo',
//     child: null
// }
// data.child = data;

const cloneDeepWithLoop = (obj) => {
  // Implement the function here
  obj.child = { ...obj };
  return obj;
};

console.log(cloneDeepWithLoop({ name: "foo", child: null }));
