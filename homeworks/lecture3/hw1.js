/** 
 * there are unlimited numbers of 1c, 5c, 25c, 50c
 * pick 48 coins to have 1 dollar
 * print out 2 solutions
 */

///////////// backtracking ///////////////////////////////
function pickCoins() {
    let coinList = [1,50,25,5];
    let solutions = new Set();
    coinsHelper(coinList, null, solutions, 48, 0, 100);
    console.log("solutions: ",solutions);
    return;
}
function coinsHelper(coinList, currentSolution, solutions, coinTarget, sum, sumTarget){
    if(currentSolution === null){
        currentSolution = [];
    }
    if(solutions.size >1 ){
        return;
    }
    if(sum > sumTarget || currentSolution.length > coinTarget){
        return;
    }
    if(sum === sumTarget && currentSolution.length === coinTarget){
        let currentSolutionStr = [...currentSolution].sort((a,b)=>a - b).join(',');
        solutions.add(currentSolutionStr);
        return;
    }

    for(let coin of coinList){
        sum += coin;
        currentSolution.push(coin);
        coinsHelper(coinList, currentSolution, solutions, coinTarget, sum, sumTarget);
        currentSolution.pop();
        sum -= coin;
    }
    
}
console.log("started hw1");
pickCoins();
