/** 
 * there are unlimited numbers of 1c, 5c, 25c, 50c
 * pick 48 coins to have 1 dollar
 * print out 2 solutions
 */
function pickCoins() {
    // implement here
    const coins = [1, 5, 25, 50];
    const solution = [0, 0, 0 ,0];
    const res = [];

    dfs(0, 0, 0, res, coins, solution);
    return res;
}

function dfs(curMoney, coinsNum, index, res = [], coins = [], solution = []){
    if(coinsNum == 48 && curMoney == 100){
        res.push([...solution]);
        return;
    }

    if(curMoney> 100 || coinsNum > 48){
        return;
    }

    for (let i = index; i<coins.length; i++){
        solution[i]+=1;
        dfs(curMoney+coins[i], coinsNum+1, i, res, coins, solution);
        solution[i]-=1;
    }
}

pickCoins().forEach((item)=>{
    console.log(`1c: ${item[0]} 5c: ${item[1]} 25c: ${item[2]} 50c: ${item[3]}`);
});

