function normalize(message) {
  return message.toLowerCase();
}

// expected input: string
normalize('HELLO WORLD');

// unexpected input
normalize(42);
normalize({ message: 'HELLO WORLD' });

/**
 * Converts an array of numbers to a string.
 * @param {number[]} nums - The array of numbers to convert.
 * @returns {string} The resulting string.
 */
function convertArrayToString(nums) {
  return nums.toString();
}

convertArrayToString([1, 2, 3]);
convertArrayToString(['1', '2', '3']);

const obj = {
  message: 'Hello World'
};

obj.name; // undefined

obj.message.toLocaleLowerCase();
obj.message.toLocalLowerCase();

function flipCoin() {
  return Math.random < 0.5;
}
