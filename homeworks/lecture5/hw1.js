// what is the output of the following code? and explain why?

// 1
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
/**
 * Output:
 * 5
 * 5
 * 5
 * 5
 * 5
 * 
 * Reason:
 * i is defined using var. Due to closure, the value of i 
 * is determined during the run-time for console.log 
 * within setTimeout. After executing setTimeout,
 * a timer is set to 1 second for console.log(i) to be pushed to the
 * callback queue after 1 second. Multiple console.log(i) will 
 * share the same instance of i. After finishing all the call
 * stack executions, i is 5 during that moment. And, the functions
 * from the callback queue will then be executed after the call stack
 * is finally empty when the all the timers finish.
 * When, we try to execute the console.log(i), multiple
 * 5s were output to the console.
 * 
 */
// 2
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
/**
 * Output:
 * 0
 * 1
 * 2
 * 3
 * 4
 * 
 * Reason:
 * i is defined using let. i is block-scoped variable.
 * Its value can not be accssed after finishing the for loop. 
 * The value of i is determined
 * when we pass that value into the console.log(i).
 * Each console.log will have different copy of i.
 * As in the answer to the last question,
 * when timers are all time-out, all console.log(i) statement
 * will be pushed to the callback queue. When we finish the 
 * for loop, the call stack will be emptied and it resume to
 * execute all functions within callback queue in order, which
 * will print out the result above.
 * 
 */
// 3
for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(() => console.log(i), 1000);
  })(i);
}
/**
 * Output:
 * 0
 * 1
 * 2
 * 3
 * 4
 * 
 * Reason:
 * Even i is defined using var, because there
 * is no closure when i is passed as an argument
 * to a function and each function creates a new scope
 * for variable i which is seperated from the outside,
 * i is determined and copied immediately 
 * when we execute the function correspondingly. So 
 * unlike the output of question 1, the output will be 
 * different as shown in the above.
 */
// 4
let fn = () => {
  console.log('I am fn');
}
setTimeout(fn, 1000);
fn = () => {
  console.log('I am another fn');
}
/**
 * Output: 
 * I am fn
 * 
 * Reason:
 * When we encounter setTimeout, We passed in a reference to the old 
 * fn function that logs out 'I am fn'. Because we pass it in as an
 * argument for the setTimeout function. A new scope is created for
 * the argument, it is a seperate variable independent of 
 * outside variable fn. Its value remains the same, even we change fn to point to
 * a new function later on. As a result, the reference wihin setTimeout will 
 * still point to the old original function with console.log('I am fn').
 * After timeout, the old function will be executed.
 * Thus, the output.
 */

// 5
let obj = {
  name: 'obj',
}
setTimeout(() => console.log(obj), 1000);
obj.name = 'another obj';
/**
 * Output:
 * { name: 'another obj' }
 * 
 * Reason:
 * Because we schedule to execute console.log(obj)
 * function after 1 second, but before it gets 
 * executed when call stack is empty, The value
 * of obj.name is changed to 'another obj' from 
 * 'obj' when dereferencing during the executions of 
 * call stack when it is not empty,
 * the output is "{ name: 'another obj' }" instead
 * of "{ name: 'another obj' }"."
 * 
 */