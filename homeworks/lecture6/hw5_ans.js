// 1. use `promise` to print 1, 2, 3 in every 1 second
function print() {
    // your code here
    let p = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(1);
            resolve(2);
        }, 1000);
    }).then(res => {
        return new Promise((resolve, reject) => {
                setTimeout(() => {
                    console.log(res);
                    resolve(3);
                }, 1000);
            }
        );
    }).then(res => {
        setTimeout(() => {
            console.log(res)
        }, 1000);
    });
}

// improved: print every single numbers in a list in every 1 second
// hint: `reduce`
const nums = [3, 1, 6, 9, 2];

function printList() {
    // your code here
    nums.reduce((acc, item) => {
        return acc.then(() => {
            return new Promise((resolve, reject) => {
                 setTimeout(() => {
                    console.log(item);
                    resolve();
                }, 1000);
            });
        });
    }, new Promise((resolve) => {
        resolve();
    }));
}

// 2. traffic light
// output: red -> green -> yellow -> red -> ...
// the delay time is up to you, but the order has to be correct
function trafficLight() {
    // your code here
    let cycle = 10;
    let lights = [];
    let unitLight = ['red', 'green', 'yellow'];
    let delayTime = 1000;
    for (let i = 0; i < cycle; i++) {
        lights = lights.concat(unitLight);
    }
    lights.reduce((acc, item) => {
        return acc.then(() => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    console.log(item);
                    resolve();
                }, delayTime);
            });
        });
    }, new Promise((resolve) => {
        resolve();
    }));

}

trafficLight();
