// class user {
//   constructor(email, password) {
//     this.email = email;
//     this.password = password;
//   }

//   get email(){
//     return `${this._email.toUpperCase()}`
//   }

//   set email(value){
//     this._email = value
//   }

//   get password() {
//     return `${this._password}sameer`
//   }

//   set password(value) {
//     this._password = value
//   }
// }

// const newUser = new user("sameer@gmail.com ", "its: ");
// console.log(newUser.email);

// ***************** old syntax of getrs and setrs ***********

function Users(email){
    this._email = email

    Object.defineProperty(this, "email", {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })
}

const chai = new Users("chai@gmail.com", 1234)
// console.log(chai.email);

// objectbased getrs and setrs **********

const User = {
    _email: "chai@gmail.com",
    _pass: "abc",


    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email =value
    }
}

// console.log(User.email);

// factory function  

const tea = Object.create(User)
console.log(tea.email);