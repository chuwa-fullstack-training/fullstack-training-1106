// have two modules
function module1() {
    console.log("in module1: module1");
}

function module2() {
    console.log("in module1: module2");
}

module.exports = {
    module1: module1,
    module2: module2
}