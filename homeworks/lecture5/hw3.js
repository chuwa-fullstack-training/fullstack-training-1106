// what is the output in order? and explain why?

// 1
console.log('a'); // sync
setTimeout(() => console.log('b'), 0); // async method, "b" will be push to macrotask stack, even time out is 0. curr stack is ["b"] (bottom -> top)
console.log('c'); // sync so print imeediately 
new Promise((resolve, reject) => {
  resolve('d'); // its async method(cuz resolve will call .then()), so it will be push to microtask stack, curr stack is ["b", "d"] (bottom -> top)
  console.log('e'); // sync so print imeediately
  reject('f'); // reject so it will not be called
}).then(result => console.log(result)); //print the top of microtask stack, so print "d"
// print the top of macrotask stack, so print "b"
// Outputl:
// a 
// c 
// e
// d
// b

// reason: 
// 2
const fn = () =>
  new Promise((resolve, reject) => {
    console.log(1); // sync method, so print immediately
    resolve('success'); // async method, so it will be push to microtask stack, curr stack is ["success"] (bottom -> top), wait for then() to be called
  });

fn().then(res => {
  console.log(res); // will be call when every sync method is done, so print "success"
});

console.log('start'); // sync method, so print immediately
// fn().then(.... log "success" when every sync method is done
// Output:
// 1
// start
// success


// -----------------------------
// a
// c
// e
// 1
// start
// d
// success
// b