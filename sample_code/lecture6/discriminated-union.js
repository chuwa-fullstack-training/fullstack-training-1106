function area(s) {
    if (s.kind === 'square') {
        return Math.pow(s.sideLength, 2);
    }
    else {
        return Math.PI * Math.pow(s.radius, 2);
    }
}
var res = area({ kind: 'square', sideLength: 10 });
console.log(res);
