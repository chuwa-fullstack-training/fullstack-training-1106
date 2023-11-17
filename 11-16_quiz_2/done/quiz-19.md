19.  Explain following code:


function outest(){
  var c = 12; 
  function outer(b){ 
    function inner(){
      console.log(a, b, c); // try printing b and c  here
    }
    let a =10; // let instead of var
    return inner;
  }
  return outer;
}


outest()("Hi Closures")()