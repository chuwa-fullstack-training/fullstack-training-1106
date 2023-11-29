/**
 * add `,` to the number every 3 digits
 * example: 12345678 => 12,345,678
 * example: 1234.56 => 1,234.56
 * @param {number} num
 */
function format(num) {
    const numStr = num.toString();
    const parts = numStr.split('.');
    const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    if (parts.length === 2) {
        return integerPart + '.' + parts[1];
    } else {
        return integerPart;
    }
}


console.log(format(12345678));
console.log(format(1234.56));

