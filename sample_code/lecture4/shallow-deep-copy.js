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
}
data.child = data;