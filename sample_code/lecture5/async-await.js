const response = await getJSON(
  'https://api.github.com/users/chuwa-fullstack-training'
);
console.log(response);

async function getUserName() {
  const res = await getJSON(
    'https://api.github.com/users/chuwa-fullstack-training'
  );
  return res.name;
}

// await multiple promises
let res1 = await getJSON('url1');
// do something without res1
let res2 = await getJSON('url2');
// do something without res2

let [val1, val2] = await Promise.all([getJSON('url1'), getJSON('url2')]);

console.log('end');
