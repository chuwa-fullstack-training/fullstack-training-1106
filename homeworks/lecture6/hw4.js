/**
 * add `,` to the number every 3 digits
 * example: 12345678 => 12,345,678
 * example: 1234.56 => 1,234.56
 * @param {number} num
 */
function format(num) {
  // Convert the number to a string
  const numStr = num.toString();

  // Split the number into integer and decimal parts (if applicable)
  const [integerPart, decimalPart] = numStr.split('.');

  // Add commas every 3 digits to the integer part
  const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  // Combine the formatted integer part and the decimal part (if applicable)
  const formattedNumber = decimalPart
    ? `${formattedInteger}.${decimalPart}`
    : formattedInteger;

  return formattedNumber;
}

// Example usage:
console.log(format(12345678));  
console.log(format(1234.56));
