// Promise-based example
function getJSON(url) {
  return fetch(url).then(res => res.json());
}

function getUserName() {
  return getJSON('https://api.github.com/users/chuwa-fullstack-training').then(
    res => res.name
  );
}

getUserName();

// Promise-based on synchronous values
function getUser() {
  return Promise.resolve({ name: 'John', age: 30 });
}

// Promises from scratch
function getJSON(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(JSON.parse(xhr.response));
      } else {
        reject(new Error(xhr.statusText));
      }
    };
    xhr.onerror = () => reject(new Error(xhr.statusText));
    xhr.send();
  });
}

function wait(delay) {
  return new Promise(resolve => {
    if (delay < 0) reject(new Error('Delay must be >= 0'));
    setTimeout(resolve, delay);
  });
}

wait(2000).then(() => console.log('Hello!'));