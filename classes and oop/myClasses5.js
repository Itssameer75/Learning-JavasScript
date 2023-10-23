// Classes

class User {
  constructor(useername, email, password) {
    this.useername = useername;
    this.email = email;
    this.password = password;
  }

  encryptPassword() {
    return `${this.password}abc`;
  }

  changeUserName() {
    return `${this.useername.toUpperCase()}`;
  }
}

// const details = new User("samir khan", "sameer@gmail.com", "12345");
// console.log(details.encryptPassword());
// console.log(details.changeUserName());

// Behind the seeen

function users(useername, email, password) {
  this.useername = useername;
  this.email = email;
  this.password = password;
}

users.prototype.encryptPass = function encryptPass() {
  return `${this.password}abc`;
};
users.prototype.changeUserName = function encryptPass() {
  return `${this.useername.toUpperCase()}`;
};


const details = new users("samir khan", "sameer@gmail.com", "12345");
console.log(details.encryptPass());
console.log(details.changeUserName());