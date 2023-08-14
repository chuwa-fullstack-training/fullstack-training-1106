function checkValidURL(url) {
  // if (url.startsWith('http://') || url.startsWith('https://')) {
  //     const [protocol, address] = url.split('://');
  //     const [domain, ...path] = address.split('/');
  //     const domainParts = domain.split('.');
  //     if (domainParts.length >= 2 && domainParts[0] === 'www' && domainParts[2] === 'com') {
  //         return true;
  //     }
  // }
  // return false;

  const regex =
    /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
  return regex.test(url);
}

const validURLs = [
  'http://www.google.com',
  'https://www.google.com',
  'http://www.google.com/',
  'https://www.google.com/',
  'http://www.google.com/search',
  'https://www.google.com/search',
  'http://www.google.com/search/',
  'https://www.google.com/search/',
  'http://www.google.com/search?q=javascript'
];

console.log(validURLs.every(checkValidURL)); // Output: true

const invalidURLs = [
  'http://www.google',
  'https://www.google',
  'http://www.google.',
  'https://www.google.',
  'http://www.google/search'
];

console.log(invalidURLs.some(checkValidURL)); // Output: false

// match
const str = '7 + 8 equals 15';
console.log(str.match(/\d+/g)); // Output: ['7', '8', '15']

// replace
console.log(str.replace(/\w+(?=\s\d+)/, '=')); // Output: 'seven plus seven equals seven'
