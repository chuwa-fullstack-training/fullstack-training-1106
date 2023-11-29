// What would be the output of following code?
// Explain your answer.

console.log(0.1 + 0.2);
0.30000000000000004   //I dont know why, but I ran it, the answer is this one.
console.log(0.1 + 0.2 == 0.3);
//false, because the result is not equal to 0.3
console.log(1 +  "2" + "2");
//122
console.log(1 +  +"2" + "2");
//32 +"2" converts to the number 2
console.log(1 +  -"1" + "2");
//02. 1-1 = 0, then 02
console.log(+"1" +  "1" + "2");
//112. All threat as string
console.log( "A" - "B" + "2");
//NaN. you cannot subtract strings
console.log( "A" - "B" + 2);
//NaN. you cannot subtract strings
console.log("0 || 1 = "+(0 || 1));
//0 || 1 = 1. idk why
console.log("1 || 2 = "+(1 || 2));
//1 || 2 = 1. idk why
console.log("0 && 1 = "+(0 && 1));
//0 && 1 = 0
console.log("1 && 2 = "+(1 && 2));
//1 && 2 = 2
console.log(false == '0')
//true. because false == '0' is a true statement
console.log(false === '0')
//false. false === '0' is false. because the type is different