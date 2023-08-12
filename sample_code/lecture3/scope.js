function f() {
  var a = 1,
    x = 1;
  function f1() {
    var b = 1,
      x = 'a';
    function f2() {
      var c = 1,
        x = 2;
      console.log('inside f2', 'a:', a, 'b:', b, 'c:', c, 'x:', x);
    }
    f2();
    console.log('inside f1', 'a:', a, 'b:', b, 'x:', x);
  }
  f1();
  console.log('inside f', 'a:', a, 'x:', x);
}
f();
