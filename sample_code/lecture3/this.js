function callName() {
  console.log(this.name);
}

function sayHi() {
  console.log('Hi,', this.name + '!');
}

const obj = {
  name: 'obj',
  callName: callName
};

callName(); // undefined
obj.callName(); // obj
callName.call(obj); // obj

// func.call(context, arg1, arg2, ...)

const arr = [callName, sayHi];
arr[0](); // undefined // arr.0.call(arr)
