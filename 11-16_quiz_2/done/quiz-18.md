18. Explain following code:

function outer(){
  var a = 10;
  function inner(){
    console.log(a);
  }
  return inner;
}

outer()();