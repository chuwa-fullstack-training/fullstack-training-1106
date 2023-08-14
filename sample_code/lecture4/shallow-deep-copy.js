// shallow copy
const originalData = {
  a: '123',
  b: 123,
  c: true
};
const shallowCopy = originalData;
shallowCopy.a = '456';
console.log(originalData.a);

const deepCopy = JSON.parse(JSON.stringify(originalData));
// const deepCopy = { ...originalData }; // Object.assign({}, originalData);
deepCopy.a = '789';
console.log(originalData.a);

originalData.c = [1, 2, 3];
const deepCopy2 = JSON.parse(JSON.stringify(originalData));
// const deepCopy2 = { ...originalData };
deepCopy2.c.push(4);
console.log(originalData.c, deepCopy2.c);

const comprehensiveData = {
  a: '123',
  b: 123,
  c: true,
  d: [43, 2],
  e: undefined,
  f: null,
  g: function () {
    console.log('g');
  },
  h: new Set([3, 2, null]),
  i: Symbol('fsd'),
  j: { id: 1 },
  k: new Map([
    ['name', 'Aaron'],
    ['title', 'Instructor']
  ])
};

console.log(JSON.parse(JSON.stringify(comprehensiveData)));

const data = {
  name: 'foo',
  child: null
};
data.child = data;
