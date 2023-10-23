// End of the Every thing is object

function multiPlyFive(num) {
  return num * 5;
}

multiPlyFive.power = 2;

// console.log(multiPlyFive(5));
// console.log(multiPlyFive.power);
// console.log(multiPlyFive.prototype);


function creatUser(username, price){
    this.username = username
    this.price = price
}


creatUser.prototype.increment = function(){
    this.price++
}

creatUser.prototype.printMe = function(){
    console.log(`price is: ${this.price}`);
}

const chai = new creatUser("chai",10)
const coffe =new creatUser("coffe",20)

chai.printMe()
coffe.printMe()



function user(username, item, price, isBought){
    this.username = username
    this.item = item
    this.price = price
    this.isBought = isBought

}

user.prototype.detail = function(){
    console.log(`User details is: ${"user name: " + this.username + " Item: " + this.item + " Price: "  + this.price + " Buy: " + this.isBought}`);
}

const tea = new user("sameer", 1, 100, true)
const coldCoffe = new user("khan", 1, 200, true)


tea.detail()
coldCoffe.detail()




