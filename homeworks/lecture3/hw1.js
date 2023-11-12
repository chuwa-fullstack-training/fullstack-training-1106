/** 
 * there are unlimited numbers of 1c, 5c, 25c, 50c
 * pick 48 coins to have 1 dollar
 * print out 2 solutions
 */
function pickCoins() {
    // implement here
    const combinations = [];
    const currCombination = [0, 0, 0, 0];
    const coins = [1, 5, 25, 50];
    function backtrack(sum, count, index) {
        // console.log(currCombination);
        if(combinations.length === 2) {
            return;
        }
        if(sum > 100 || count > 48) {
            return;
        }
        if(sum === 100 && count === 48) {
            combinations.push([...currCombination]);
            return;
        }
        for(let i = index; i < coins.length; i++) {
            currCombination[i]++;
            backtrack(sum + coins[i], count+1, i);
            currCombination[i]--;
        }
    }
    backtrack(0, 0, 0); 
    return combinations;
}

console.log(pickCoins());
