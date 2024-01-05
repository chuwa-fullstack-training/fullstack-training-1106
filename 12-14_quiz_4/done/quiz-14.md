14. Does browser understand ES6 directly? 

Then what extra step to make browser understand it?


















Browsers do not fully understand all ES6 (ECMAScript 2015) features by default, especially older browsers. However, modern browsers have implemented many ES6 features and continue to add support for new ECMAScript versions over time.

To ensure that modern browsers understand and properly execute ES6 code, you can take the following step:

Transpilation: Use a tool like Babel to transpile your ES6 code into an older version of JavaScript (typically ES5) that is widely supported by browsers. Transpilation converts ES6 syntax and features into equivalent ES5 code that browsers can understand. This way, you can write code using the latest JavaScript features while ensuring compatibility with a broader range of browsers.