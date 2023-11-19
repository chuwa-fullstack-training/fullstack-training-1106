// write a function to deep clone an object with circular reference
//
// const data = {
//     name: 'foo',
//     child: null
// }
// data.child = data;

const cloneDeepWithLoop = (obj) => {
    // Implement the function here
    const map = new WeakMap();

    function clone(obj){
        if(typeof obj !== 'object' || obj === null){
            return obj;
        }

        if(map.has(obj)){
            return map.get(obj);
        }

        let clonedObj = Array.isArray(obj)? [] : {};
        map.set(obj, clonedObj);

        for(const key in obj){
            if(obj.hasOwnProperty(key)){
                clonedObj[key] = clone(obj[key]);
            }
        }
        return clonedObj;

    }
    return clone(obj);
};