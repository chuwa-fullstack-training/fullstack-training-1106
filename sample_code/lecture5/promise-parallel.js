const urls = [
  'https://api.github.com/search/repositories?q=javascript',
  'https://api.github.com/search/repositories?q=react',
  'https://api.github.com/search/repositories?q=nodejs'
];

const promises = urls.map(url => getJSON(url));

Promise.all(promises).then(allRes => console.log(allRes)).catch();

Promise.race(promises).then(firstRes => console.log(firstRes));

Promise.allSettled(promises).then(allRes => console.log(allRes));
