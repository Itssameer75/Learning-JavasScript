const discriptor = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(discriptor);
// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const chai ={
    name: "milkChai",
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nahi bani");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "orderChai"));

Object.defineProperty(chai, "name", {
    // writable: false,
    enumerable: false
})
// console.log(Object.getOwnPropertyDescriptor(chai, "name"));


// chai.name = "sameer"
// console.log(chai.name);


for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== "function") {
        
        // console.log(`${key} : ${value}`);
    }
}