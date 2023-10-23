class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`username is: ${this.username}`);
    }

    static createId(){
        return `123`
    }

}

const name = new User("sameer")
// console.log(name.createId())

class Teacher extends User {
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@gmail.com")

console.log(iphone.createId())