// ++++++++++++++++ String +++++++++++++++++



let string = "name"
console.log(string.length)

let game = new String("dodge challenger")
let b = game.substring(0 ,4)
console.log(b)
console.log(b.charAt(0))
console.log(b.indexOf("g"))
// console.log(b.split())
console.log(b)
console.log(game)

let url = "https://m.youtube%20.com/"
console.log(url.replace('%20' , ''))
