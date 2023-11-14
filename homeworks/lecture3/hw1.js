/**
 * there are unlimited numbers of 1c, 5c, 25c, 50c
 * pick 48 coins to have 1 dollar
 * print out 2 solutions
 */

/**
 * A variant of leetcode #518
 * 
 * Takeaway: 
 * Be careful with copying arrays. Because they are passed by reference,
 * tricky things could happen unintentionally if not careful.
 */
function pickCoins() {
    // implement here
    const amount = 100;
    const coins = [1, 5, 25, 50];
    const dp = Array(coins.length + 1).fill(null).map(() => Array(amount + 1).fill(0));
    let hist = Array(coins.length + 1).fill(null).map(() => Array(amount + 1).fill(null).map(() => Array(0)));
    for (let i = 0; i <= coins.length; i++) {
        dp[i][0] = 1;
        hist[i][0].push([0, 0, 0, 0]);
    }

    for (let i = 1; i <= coins.length; i++) {
        for (let j = 1; j <= amount; j++) {
            if (j - coins[i - 1] >= 0) {
                dp[i][j] = dp[i - 1][j] + dp[i][j - coins[i - 1]];

                if (dp[i - 1][j] > 0) {
                    let combos = JSON.parse(JSON.stringify(hist[i - 1][j]));
                    hist[i][j].push(...combos);
                }
                if (dp[i][j - coins[i - 1]] > 0) {
                    let newCombos = JSON.parse(JSON.stringify(hist[i][j - coins[i - 1]]));
                    for (let newCombo of newCombos) {
                        newCombo[i - 1] += 1;
                    }
                    hist[i][j].push(...newCombos);
                }
            } else {
                dp[i][j] = dp[i - 1][j];
                if (dp[i - 1][j] > 0) {
                    let combos = JSON.parse(JSON.stringify(hist[i - 1][j]));
                    hist[i][j].push(...combos);
                }
            }
        }
    }

    return hist[coins.length][amount].filter((combo) => combo.reduce((acc, curr) => acc + curr, 0) == 48);
}
let res = pickCoins();
console.log(`${res.length} solutions for <1c, 5c, 25c, 50c>:`);
console.log(res);
