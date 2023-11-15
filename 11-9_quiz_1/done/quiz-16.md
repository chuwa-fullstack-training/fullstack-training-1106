What this function does?[JS]

function guess(arr) {
  return arr.reduce(function(acc, cur) {
    return acc.concat(Array.isArray(cur) ? guess(cur) : cur);
  }, []);
}