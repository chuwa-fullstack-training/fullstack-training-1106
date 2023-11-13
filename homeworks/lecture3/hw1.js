/** 
 * there are unlimited numbers of 1c, 5c, 25c, 50c
 * pick 48 coins to have 1 dollar
 * print out 2 solutions
 */
function pickCoins() {
    // implement here
    const combos = [];
    const combo = [0, 0, 0, 0];
    const coins = [1, 5, 25, 50];
    function backtrack(total, count, idx) {
        if (total > 100 || count > 48) {
            return;
        }
        if (total == 100 && count == 48) {
            combos.push([...combo]);
            // combos.push(combo);
            return;
        }
        for (let i = idx; i < coins.length; i++) {
            combo[i]++;
            backtrack(total + coins[i], count + 1, i);
            combo[i]--;
        }
    }
    backtrack(0, 0, 0);
    return combos;
}

console.log(pickCoins().slice(0, 2));