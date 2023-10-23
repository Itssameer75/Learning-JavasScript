// call ++++++++++++++++++++

function setUserName(username){
    this.username = username
    // console.log("called");
}



function createUser(username, email, password){
    setUserName.call(this, username)

    this.email = email
    this.password = password
}
1245
const details = new createUser("sameer", "sameer@gmail.com", "123456")
console.log(details);

