19. Create a function named compose which accepts an unspecified number of single-argument functions as arguments and returns a function which executes those functions from left to right.

For example:

If,

const addOne = (a) => a + 1;
const multiplyByTwo = (b) => b * 2;

Then,

compose(addOne, multiplyByTwo)(3) should return 8.
