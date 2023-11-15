/**
 * there are unlimited numbers of 1c, 5c, 25c, 50c
 * pick 48 coins to have 1 dollar
 * print out 2 solutions
 */
function pickCoins() {
    // implement here
    // iterative solution
    let result = [];
    for (let i=0; i<=48; i++) {
        for (let j=0; j<=48-i; j++) {
            for (let k=0; k<=48-i-j; k++) {
                for (let l=0; l<=48-i-j-k; l++) {
                    let sum = i*1+j*5+k*25+l*50;
                    let totalCoins = i+j+k+l;
                    if (sum === 100 && totalCoins === 48) {
                        result.push(JSON.parse(JSON.stringify([i, j, k, l])));
                    }
                }
            }
        }
    }
    return result.slice(0, 2);
}

// a recursive solution
function pickCoinsRecursive() {
    var result = [];
    var visited = new Set();
    function helper(i, j, k, l) {
        let sum = i*1+j*5+k*25+l*50;
        let totalCoins = i+j+k+l;
        // base case
        if (visited.has(JSON.stringify([i, j, k, l]))) { return; }
        else { visited.add(JSON.stringify([i, j, k, l])); }

        if (sum === 100 && totalCoins === 48) { 
            result.push(JSON.parse(JSON.stringify([i, j, k, l]))); 
            return;
        }
        if (totalCoins > 48 || sum > 100) { return; }

        // recursive step
        if (i < 48 && totalCoins+1<=48) { helper(i+1, j, k, l); }
        if (j < 48 && totalCoins+1<=48) { helper(i, j+1, k, l); }
        if (k < 48 && totalCoins+1<=48) { helper(i, j, k+1, l); }
        if (l < 48 && totalCoins+1<=48) { helper(i, j, k, l+1); }
    }
    helper(0, 0, 0, 0);
    return result.slice(0, 2);
}

// test cases
const result1 = pickCoins();
console.assert(result1.length === 2, "Number of solution failed for pickCoins.")
result1.forEach(([i, j, k, l]) => {
    const sum = i*1+j*5+k*25+l*50;
    const coins = i+j+k+l;
    console.assert(sum===100 && coins===48, "Function pickCoins failed.");
})


const result2 = pickCoins();
console.assert(result2.length === 2, "Number of solution failed for pickCoinsRecursive.")
result2.forEach(([i, j, k, l]) => {
    const sum = i*1+j*5+k*25+l*50;
    const coins = i+j+k+l;
    console.assert(sum===100 && coins===48, "Function pickCoinsRecursive failed.");
})
