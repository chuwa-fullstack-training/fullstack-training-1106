/** 
 * there are unlimited numbers of 1c, 5c, 25c, 50c
 * pick 48 coins to have 1 dollar
 * print out 2 solutions
 */
var ans = []
function pickCoins() {
    // implement here
    combination(0,100,[]);
    return ans;
}

var combination = function get(num, value, res){
    if(ans.length==2) return;
    if(value<0 || num > 48) return;
    if(value === 0){
        if(num === 48) ans.push(res.slice());
        else return;
    }else{
        res.push(1);
        get(num+1,value-1,res);
        res.pop();
        res.push(5);
        get(num+1,value-5,res);
        res.pop();
        res.push(25);
        get(num+1,value-25,res);
        res.pop();
        res.push(50);
        get(num+1,value-50,res);
        res.pop();
    }
}

pickCoins()