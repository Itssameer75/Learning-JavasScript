// const users = {
//     username: "sameer",
//     loginCount: 5,
//     signIn: true,

//     getAllUsers: function(){
//         console.log(this);
//     }

// }

// console.log(users["username"]);
// console.log(users.getAllUsers());
// console.log(this);

// const userTwo = {
//     username: "sameer",
//     loginCount: 5,
//     signIn: true,

//     getAllUsers: function(){
//         console.log(this);
//     }

// }

// constructer function is "new" keyword **********************************
// 1. create new empty object
// 2. called construction function by new keyword
// 3. inject all arguments in object using this keyword
// 4. get in function all arguments

function user(username, isLogin, loginCount) {
  this.username = username;
  this.isLogin = isLogin;
  this.loginCount = loginCount;

  this.getAllUsers = function () {
    console.log(`welcome mr.. ${this.username}`);
  };

  // return this
}

const userResult = new user("sameer", true, 50);
const userTEmp = new user("khan", false, 0).getAllUsers();
console.log(userResult.constructor);
// console.log(userResult instanceof user);
console.log(userTEmp);

