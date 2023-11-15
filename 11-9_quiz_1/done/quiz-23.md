 What is the difference between dot notation and square bracket notation in accessing object properties?[JS]


Answer:



let obj = {
  p1: "p1",
  o2: "p2"
}

const temp = "o2"
console.log(obj.p1)
console.log(obj[temp])