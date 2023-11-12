// What would be the output of following code?
// Explain your answer.

console.log(0.1 + 0.2);
//0.30000000000000004 (float poin add)
console.log(0.1 + 0.2 == 0.3);
//False 0.30000000000000004!=0.3
console.log(1 +  "2" + "2");
//122 beacuse 1 +  "2" change to string 12 then "12" + "2" become "122" 
console.log(1 +  +"2" + "2");
//32 beacuse 1++"2" = 1 + 2, then 3 + "2" = "32"
console.log(1 +  -"1" + "2");
//02 because 1+ -"1" = 0 then 0 + "2" = "02"
console.log(+"1" +  "1" + "2");
//112 beceuse (+"1" +  "1" + "2") = (1 +  "2" + "2")
console.log( "A" - "B" + "2");
//"NaN2" because "A" - "B" not a number and then add "2"
console.log( "A" - "B" + 2);
//NaN  when you add a number to NAN is always = NAN
console.log("0 || 1 = "+(0 || 1));
//"0 || 1 = 1"
console.log("1 || 2 = "+(1 || 2));
//"1 || 2 = 1"
console.log("0 && 1 = "+(0 && 1));
//"0 && 1 =0"
console.log("1 && 2 = "+(1 && 2));
//"1 && 2 = 1"
console.log(false == '0')
//false
console.log(false === '0')
//false