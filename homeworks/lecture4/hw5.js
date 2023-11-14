// write a function to deep clone an object with circular reference
// 
// const data = {
//     name: 'foo',
//     child: null
// }
// data.child = data;
const clonedObjects = new Map();
const cloneDeepWithLoop = (obj) => {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

     // 如果已经克隆过该对象，则直接返回已经克隆的对象，防止无限递归
    if (clonedObjects.has(obj)) {
        return clonedObjects.get(obj);
    }

    const newObj = Array.isArray(obj) ? [] : {};

    // 将当前对象存入 Map 中，避免循环引用导致无限递归
    clonedObjects.set(obj, newObj);

    for (const key in obj) {
        newObj[key] = cloneDeepWithLoop(obj[key]);
    }

    return newObj;
}

const data = {
    name: 'foo',
    child: null
}
data.child = data;
console.log(cloneDeepWithLoop(data));