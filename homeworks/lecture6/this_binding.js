let obj = {
    a: function (f) {
        console.log(this);
        f();
        (() => {
            console.log(this)
        })();
        (function () {
            console.log(this)
        })();
    }
}
obj.a(() => { console.log(this) });
console.log("----");
obj.a(function () { console.log(this) });