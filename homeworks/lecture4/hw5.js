// write a function to deep clone an object with circular reference
// 
// const data = {
//     name: 'foo',
//     child: null
// }
// data.child = data;

const cloneDeepWithLoop = (obj) => {
    // Implement the function here
    saved = new Map();
    let cloneObj = (obj) => {
        if (saved.has(obj)) {
            return saved.get(obj);
        }
        let newObj = {};
        saved.set(obj, newObj);
        for (const [key, value] of Object.entries(obj)) {
            if (typeof value === "object" && value != null) {
                newObj[key] = cloneObj(value);
            } else {
                newObj[key] = value;
            }
        }
        return newObj;
    }
    return cloneObj(obj);
}

module.exports = cloneDeepWithLoop;