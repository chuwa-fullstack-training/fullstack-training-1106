// 1. use `promise` to print 1, 2, 3 in every 1 second
function print() {

  // Not correct:
  // return new Promise((resolve, reject) => {
  //   set(() => {
  //     console.log(1, 2, 3);
  //     resolve();
  //   }, 1000)
  // });

  // your code here
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(1);
      resolve();
    }, 1000);
  }).then(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(2);
        resolve();
      }, 1000);
    });
  }).then(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(3);
        resolve();
      }, 1000);
    });
  });
}

// print();


// improved: print every single numbers in a list in every 1 second
// hint: `reduce`
const nums = [3, 1, 6, 9, 2];

function printList() {
  // your code here
  return new Promise((resolve, reject) => {
    nums.reduce((acc, cur) => {
      return acc.then(() => {
        return new Promise ((resolve, reject) => {
          setTimeout(() => {
            console.log(cur);
            resolve();
          }, 1000);
        })
      })
    }, resolve());
  });
}

printList();

// 2. traffic light
// output: red -> green -> yellow -> red -> ...
// the delay time is up to you, but the order has to be correct
function trafficLight() {
  // your code here
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('red');
      resolve();
    }, 1000);
  }).then(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('green');
        resolve();
      }, 1000);
    });
  }).then(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('yellow');
        resolve();
      }, 1000);
    });
  }).then(() => {
    return trafficLight();
  });
}

// trafficLight();