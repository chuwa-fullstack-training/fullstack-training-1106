const urls = [
  'https://api.github.com/search/repositories?q=javascript',
  'https://api.github.com/search/repositories?q=react',
  'https://api.github.com/search/repositories?q=nodejs'
];

const promises = urls.map(url => getJSON(url));
// 当这个数组中的所有 Promise 对象都成功时，Promise.all() 返回 Promise 被解析（resolve）数组。
// 如果任何一个 Promise 失败，Promise.all() 返回的 Promise 被拒绝（reject）。
Promise.all(promises).then(allRes => console.log(allRes)).catch();

// Promise.race() 返回的 Promise 将由第一个解析或拒绝的 Promise 决定。
Promise.race(promises).then(firstRes => console.log(firstRes));

// 它返回的是一个数组，每个元素表示对应的 Promise 结果（成功或失败）。
Promise.allSettled(promises).then(allRes => console.log(allRes));
