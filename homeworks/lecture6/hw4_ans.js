/**
 * add `,` to the number every 3 digits
 * example: 12345678 => 12,345,678
 * example: 1234.56 => 1,234.56
 * @param {number} num
 */
function format(num) {
    // your code her
    let [integerPart, decimalPart] = num.toString().split(".");
    let count = 1;
    let formatted = "";
    for(let i = integerPart.length - 1; i >= 0; i--){
        if(count % 3 === 0 && i != 0){
            formatted =  ','+ integerPart[i] + formatted;
        }else{
            formatted = integerPart[i] + formatted;
        }
        count += 1
    }
    if(decimalPart !== undefined){
        formatted = formatted + '.' + decimalPart;
    }
    return formatted;
}

console.log(format(1234))