/** 
 * there are unlimited numbers of 1c, 5c, 25c, 50c
 * pick 48 coins to have 1 dollar
 * print out 2 solutions
 */
function pickCoins(coins, count, sum) {
    let result = [];
    let stack = [{ combination: [], remainSum: sum, index: 0 }];

    while(stack.length>0){
        let { combination, remainSum, index } = stack.pop();
        if(remainSum === 0 && combination.length === count){
            result.push([...combination]);
            continue;
        }

        for(let i = index; i<coins.length; i++){
            if(remainSum - coins[i] >= 0){
                stack.push({ combination: [...combination, coins[i]], remainSum: remainSum - coins[i], index: i});
            }
        }
    }

    console.log(result[0], result[1])
    return result;
}


pickCoins([1,5,25,50], 48, 100)


// Output: [
//   1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
//   1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
//   1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
//   1, 1, 5, 5, 5, 5, 5, 5, 5, 5, 5,
//   5, 5, 5, 5 ] [
//   1, 1, 1,  1, 1, 1, 1, 1, 1, 1, 1,
//   1, 1, 1,  1, 1, 1, 1, 1, 1, 1, 1,
//   1, 1, 1,  1, 1, 1, 1, 1, 1, 1, 1,
//   1, 1, 1,  1, 1, 1, 1, 5, 5, 5, 5,
//   5, 5, 5, 25 ]