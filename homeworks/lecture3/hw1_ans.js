/** 
 * there are unlimited numbers of 1c, 5c, 25c, 50c
 * pick 48 coins to have 1 dollar
 * print out 2 solutions
 */
var available = [1, 5, 25, 50];
function pickCoins(remains, number,ith, result){
    if(remains === 0 && number ===0){
        console.log(result);
        return;
    }

    for(let i = ith; i < available.length; i++){
        if(remains >= available[i] && number > 0){
            result[available[i]] += 1;
            pickCoins(remains - available[i], number-1, i, result);
            result[available[i]] -= 1;
        }   
    }
}
function main() {
    // implement here
    let result = {}
    for(let i = 0; i < available.length; i++){
        result[available[i]] = 0;
    }
    pickCoins(100, 48, 0, result);
}


main()