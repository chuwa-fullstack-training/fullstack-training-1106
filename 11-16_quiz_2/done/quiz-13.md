13. Explain following code:

const r2d2 = {
  "name": "R2-D2",
  "height": "96",
  "mass": "32",
  "hair_color": "n/a",
  "skin_color": "white, blue",
  "eye_color": "red",
  "birth_year": "33BBY",
  "gender": "n/a",
};

const { name, height:robotHeight, mass:robotMass = "100", nothing:something = true } = r2d2
console.log(name)
// "R2-D2"
console.log(height)
// error
console.log(robotHeight)
// "96"
console.log(mass)
// error
console.log(robotMass)
// "32"
console.log(nothing)
// error
console.log(something)
// true



Don't forget swap:

var x = 10,
  y = 20;

[x, y] = [y, x];
console.log(x); // 20
console.log(y); // 10