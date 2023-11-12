/** 
 * there are unlimited numbers of 1c, 5c, 25c, 50c
 * pick 48 coins to have 1 dollar
 * print out 2 solutions
 */

function pickCoins() {
    const res = [];
    let temp = [0, 0, 0, 0];//represents the number of each conins [one,five,twenty-five,fifty]
    let coins = [1, 5, 25, 50];
    // backtracking:find all solutions and return 2 of them
    function backtracking(total, number, begin) {
        if (total == 100 && number == 48) {
            res.push([...temp]);
            return;
        }
        if (total > 100 || number > 48) {
            return;
        }
        for (let i = begin; i < coins.length; i++) {
            temp[i] += 1;
            backtracking(total + coins[i], number + 1, i);
            temp[i] -= 1;
        }
    }
    backtracking(0, 0, 0);
    return res.slice(0, 2);
}
const res = pickCoins();
console.log("48枚硬币构成1美元的前两种方案有：")
for (let sol of res) {
    console.log(`${sol[0]}枚1分 + ${sol[1]}枚5分 + ${sol[2]}枚25分 + ${sol[3]}枚50分`);
}

