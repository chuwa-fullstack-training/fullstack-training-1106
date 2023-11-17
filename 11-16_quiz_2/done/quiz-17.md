17. Explain following code:

function x(){
  for (var i = 1; i <= 10; i++){  // using var here 
    setTimeout(function (){
      console.log(i);
    }, 1000);
  }
  console.log("Learn");
}
x();

// How to fix it?
Learn
1
2
3
4
..
10