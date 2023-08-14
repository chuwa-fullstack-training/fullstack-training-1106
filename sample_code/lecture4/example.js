// non-functional - imperative - focus on how to do
let data = [1, 1, 3, 5, 5]; // This is our array of numbers
// The mean is the sum of the elements divided by the number of elements
let total = 0;
for (let i = 0; i < data.length; i++) total += data[i];
let mean = total / data.length; // The mean of our data is 3
// To compute the standard deviation, we first sum the squares of
// the deviation of each element from the mean.
total = 0;
for (let i = 0; i < data.length; i++) {
  let deviation = data[i] - mean;
  total += deviation * deviation;
}
let stddev = Math.sqrt(total / (data.length - 1));

// functional programming - declarative - focus on what to do
let sum = function (x, y) {
  return x + y;
};
let square = function (x) {
  return x * x;
};
// Then use those functions with Array methods to compute mean and stddev
data = [1, 1, 3, 5, 5];
mean = data.reduce(sum) / data.length;
let deviations = data.map(function (x) {
  return x - mean;
});
stddev = Math.sqrt(deviations.map(square).reduce(sum) / (data.length - 1));
