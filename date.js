const myDate = new Date()
console.log(`it is toString: ${myDate.toString()}`) //Sun Oct 08 2023 11:00:51 GMT+0530 (India Standard Time)

console.log(`it is toDateString: ${myDate.toDateString()}`) //Sun Oct 08 2023        

console.log(`it is toISOString: ${myDate.toISOString()}`) //2023-10-08T05:30:51.913Z     

console.log(`it is toJSON: ${myDate.toJSON()}`) // 2023-10-08T05:30:51.913Z

console.log(`it is toLocaleDateString: ${myDate.toLocaleDateString()}`) //8/10/2023 

console.log(`it is toLocaleTimeString: ${myDate.toLocaleTimeString()}`) //11:00:51 am 

console.log(`it is toTimeString: ${myDate.toTimeString()}`) //11:00:51 GMT+0530 (India Standard Time)

let newDate = new Date("10-8-2023")
// console.log(newDate.toLocaleDateString())

let myTimeStemp = Date.now()
console.log(myTimeStemp)
console.log(newDate.getTime())
