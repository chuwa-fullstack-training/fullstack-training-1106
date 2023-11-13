/** 
 * there are unlimited numbers of 1c, 5c, 25c, 50c
 * pick 48 coins to have 1 dollar
 * print out 2 solutions
 */
function pickCoins() {
    const coinTypes = [50, 25, 5, 1];
    let solutions = backtrack(100, coinTypes, 48);
    return solutions.slice(0, 2);
}

function backtrack(totalAmount, coins, maxCoins, currentCount = 0, startIdx = 0) {
    if (totalAmount === 0) {
        return currentCount === maxCoins ? [[]] : [];
    }

    if (startIdx >= coins.length || totalAmount < 0 || currentCount > maxCoins) {
        return [];
    }

    let withCurrent = backtrack(totalAmount - coins[startIdx], coins, maxCoins, currentCount + 1, startIdx);
    let solutionsWith = withCurrent.map(sol => [coins[startIdx], ...sol]);

    let withoutCurrent = backtrack(totalAmount, coins, maxCoins, currentCount, startIdx + 1);

    return [...solutionsWith, ...withoutCurrent];
}

console.log(pickCoins());

