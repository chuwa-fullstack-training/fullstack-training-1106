// write a function to deep clone an object with circular reference
// 
// const data = {
//     name: 'foo',
//     child: null
// }
// data.child = data;

const cloneDeepWithLoop = (obj) => {
    // Implement the function here
  const res = {...obj};
  for (let i in res) {
    if (res[i] === obj) {
      res[i] = res;
    }
  }
  return res;
}

const data = {
    name: 'foo',
    child: null
}
data.child = data;