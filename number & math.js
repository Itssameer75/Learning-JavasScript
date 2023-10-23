let num = 50

const newNum = new Number(50000)

console.log(newNum)
console.log(newNum.toFixed(2))
console.log(newNum.toLocaleString())
const to = newNum.toPrecision()
console.log(to)

// ++++++++++++++++++++++++++++ Math ++++++++++++++++++++++++++++++++

let min = 1
let max = 6

console.log(Math.floor((Math.random() * (max - min))) + min)