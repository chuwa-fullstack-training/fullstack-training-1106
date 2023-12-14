//20. Create a function named setDefault which takes an argument of any value and returns a function, which when passed a truthy argument, returns that truthy argument, and when passed a falsy argument, returns the original argument passed to setDefault.
function setDefault(value) {
    return function (value) {
        if (value) {
            return value;
        } else {
            return value;
        }
    }

    //return value ? value : defaultValue;
}

// 15. use reduce to create a function named allGreaterThanThree which accepts an unspecified number of integer arguments and returns true only if all passed arguments are greater than 3.
function allGreaterThanThree() {
    return Array.from(arguments).reduce(function (acc, val) {
        return acc && val > 3;
    }, true);


    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i] <= 3) {
            return false;
        }
    }
    return true;

    return args.reduce((acc, num) => acc && (num > 3), true);
}