class User {
    constructor(username){
        this.username = username
    }

    logme(){
        console.log(`user name is: ${this.username}`);
    }
}

class teacher extends User{
    constructor(username, email, pass){
        super(username)
        this.email = email
        this.pass = pass
    }

    addCoures(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const details = new teacher("sameer", "same@google.com", 1230456)
const user = new User("same")
details.logme()
user.logme()

console.log(details instanceof User);