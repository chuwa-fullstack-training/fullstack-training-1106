// function p(v) {
//     return new Promise((resolve, reject) => {
//         resolve(v);
//     })
// }

function p(v) {
    return Promise.resolve(v);
}
p(2).then(res => console.log("res:", res));

// const addTwo = arr => arr.map(num => num + 2)
const addTwo = function (arr) {
    return arr.map(num => num + 2)
}

console.log("addtWO: ", addTwo([1, 2, 3]))

const isOdd = num => num % 2 != 0;
console.log("isodd: ", isOdd(3));
console.log("isodd: ", isOdd(4));

function converHexadecimal(s) {
    return parseInt(s, 16);//parseInt可以字符串转换数组，第二个参数表示字符串进制
}

console.log(converHexadecimal('10'));
console.log(converHexadecimal('af'));


const getLast = nums => nums[nums.length - 1];
console.log("getlast: ", getLast([1, 2, 3, 4]));

const removeVowels = function (s) {
    v = "aeiouAEIOU";
    arr = s.split("");
    return arr.reduce((removed, cur_ch) =>
        removed + (v.includes(cur_ch) ? "" : cur_ch)
        , "")
};
console.log("removedv", removeVowels("sownsaaaa"));

// const sum = function (arr) {
//     return arr.reduce((added, cur) => added + cur, 0);
// }

const sum = arr => arr.reduce((added, cur) => added + cur, 0);
console.log("sum: ", sum([1, 2, 3, 4]));
console.log("sum: ", sum([1, 4]));


const removeDupl = arr => arr.filter((item, index) => arr.indexOf(item) == index);

// const removeDupl = arr => [... new Set(arr)];
console.log("removeDup:", removeDupl([1, 2, 3, 1, 2, 3]));

const join = (arr1, arr2) => arr1.concat(arr2);
console.log("join: ", join([1, 2, 3], [4, 5, 6]));

// const safeTravel = function (obj, arr) {
//     var cur_obj = obj;
//     for (let i = 0; i < arr.length; i++) {
//         if (cur_obj.hasOwnProperty(arr[i]) && i != arr.length - 1) {
//             cur_obj = cur_obj[arr[i]];
//         }
//         else if (i == arr.length - 1) {
//             return cur_obj[arr[i]];
//         }
//         else {
//             return undefined;
//         }
//     }
// }

const safeTravel = function (obj, arr) {
    return arr.reduce((acc, cur) => (acc && acc[cur] !== undefined ? acc[cur] : undefined), obj);
}

console.log("safetraverse: ", safeTravel({ first: { second: 2 } }, ['first', 'second']));
console.log("safetraverse: ", safeTravel({}, ['first', 'second']));


// const setDefault = function (s) {
//     return function (b) {
//         return b ? b : s;
//     }
// }
const setDefault = s => b => b ? b : s;
console.log("setDefault: ", setDefault(72)(true));
console.log("setDefault: ", setDefault("ffol")(false));


// const allGreat = function () {
//     for (arg of arguments) {
//         if (arg < 3) {
//             return false;
//         }
//     }
//     return true;
// }

const allGreat = function (...args) {
    // return args.reduce((acc, num) => acc && (num > 3), true);
    return args.every((num) => num > 3);
}
console.log("allgreat: ", allGreat(1, 2, 3));
console.log("allgreat: ", allGreat(4, 5, 6, 7))

const addOne = a => a + 1;
const mt = b => b * 2;
// const compose = function (...args) {
//     return function (value) {
//         return args.reduce((pre, cur) => cur(pre), value)
//     }
// }
const compose = function (...args) {
    return function (value) {
        let res = value;
        args.forEach(fn => res = fn(res));
        return res;
    }
}
console.log("compose: ", compose(addOne, mt, addOne)(3))


const reverse = arr => [...arr].reverse();
const a = [5, 6, 7];
console.log("reverse: ", reverse([1, 2, 3]));
console.log("reverse: ", reverse(a));
console.log("a: ", a);

const throwOn2 = num => {
    if (num !== 2) {
        return num;
    } else {
        throw Error("2 is not allowed");
    }
}
try {
    throwOn2(2)
} catch (e) {
    console.log(e.message);
}

const promiseFunction = function (fn) {
    return function (...args) {
        return new Promise((resolve, reject) => {
            resolve(fn(...args))
        })
    }
}
const add = (a, b) => a + b;
const promiseAdd = promiseFunction(add);
promiseAdd(2, 3).then(res => {
    console.log("promiseadd: ", res);
})
