// write a function to deep clone an object with circular reference
// 
// const data = {
//     name: 'foo',
//     child: null
// }
// data.child = data;

/**
 * A variant of leetcode #133. 
 * 
 * And, I'v also referred some codes from:
 * https://medium.com/frontend-canteen/lets-play-around-with-the-deep-copy-9201b71a861b
 * There are some minor issues within the codes from the medium post. 
 * I fix some bugs and rewrite a solution based on those codes.
 * 
 */
const cloneDeepWithLoop = (src) => {
    // Implement the function here
    const cloneMap = new Map();
    const queue = [];
    const typeOfSrc = Object.prototype.toString.call(src);
    let target;
    if (typeOfSrc === '[object Array]') {
        target = [];
    } else if (typeOfSrc === '[object Object]') {
        target = {};
    } else {
        target = src;
        return target;
    }
    queue.push({ parent: null, key: null, data: src });
    while (queue.length) {
        let { parent, key, data } = queue.pop();
        let curr;
        if (parent === null) {
            curr = target;
        } else {
            let typeOfData = Object.prototype.toString.call(data);
            if (typeOfData === '[object Array]') {
                curr = [];
            } else if (typeOfData === '[object Object]') {
                curr = {};
            } else {
                curr = null;
            }
            parent[key] = curr;
        }
        if (cloneMap.has(data)) {
            parent[key] = cloneMap.get(data);
            continue;
        } else {
            cloneMap.set(data, curr);
        }
        for (let k in data) {
            if (typeof (data[k]) === 'object') {
                queue.push({ parent: curr, key: k, data: data[k] });
            } else {
                curr[k] = data[k];
            }
        }
    }
    return target;
}

const data = {
    name: 'foo',
    sup: { hello: "world" },
    arr: [1, 2, 3],
    data: null
}
data.child = data;
const newData = cloneDeepWithLoop(data);
newData.arr[0] = 2;
newData.sup.hello = "sam";
console.log(data);
console.log(data.child);
console.log(newData);
console.log(newData.child);

cloneDeepWithLoop(null);
