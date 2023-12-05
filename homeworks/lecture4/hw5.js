// write a function to deep clone an object with circular reference
// 
// const data = {
//     name: 'foo',
//     child: null
// }
// data.child = data;

const cloneDeepWithLoop = (obj) => {
    const map = new WeakMap();

    const clone = original => {
        if (typeof original !== 'object' || original === null) {
            return original;
        }

        if (map.has(original)) {
            return map.get(original);
        }

        const copy = Array.isArray(original) ? [] : {};

        map.set(original, copy);

       
        Object.keys(original).forEach(key => {
            copy[key] = clone(original[key]);
        });

        return copy;
    };

    return clone(obj);
}

const data = {
    name: 'foo',
    child: null
};
data.child = data;

const clonedData = cloneDeepWithLoop(data);
console.log(clonedData);