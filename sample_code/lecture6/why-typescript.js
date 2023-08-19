function normalizeTS(message) {
    return message.toLowerCase();
}
// expected input: string
normalizeTS('HELLO WORLD');
// unexpected input
normalizeTS(42);
normalizeTS({ message: 'HELLO WORLD' });
function convertArrayToStringTS(nums) {
    return nums.toString();
}
convertArrayToStringTS([1, 2, 3]);
convertArrayToStringTS(['1', '2', '3']);
var obj = {
    message: 'HELLO WORLD'
};
obj.name;
obj.message.toLocalLowerCase();
function flipCoin() {
    return Math.random < 0.5;
}
