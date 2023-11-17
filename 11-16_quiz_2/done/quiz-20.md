20. Explain Microtasks and (Macro)tasks in Event Loop

















Microtask
A microtask is a short function which is executed after the function or program which created it exits and only if the JavaScript execution stack is empty.
  Promise callback
  queueMicrotask


Macrotask
A macrotask is short function which is executed after JavaScript execution stack and microtask are empty.
  setTimeout
  setInterval
  setImmediate