// const promisOne = new Promise(function(resolve , reject ){
//     setTimeout(() => {
//         resolve({userName: "sameer", lastName: "khokar"})
//     }, 1000);
    
// })

// promisOne.then(function(user){
//     console.log(user);
//     return user.userName
// }).then(function(username){
//     console.log(username);
// })


// new Promise(function(resolve,reject){
//     setTimeout(() => {
//         let error = false
//         if (!error) {
//             resolve({username: "sameer", mob: "1236547890"})
//         } else {
//             reject("somthing went wrong")
//         }
//     }, 1000);
// }).then(function(user){
//     console.log(user);
//     return user.mob

// }).then(function(mob){
//     console.log(mob);
    
// }).catch(function(error){
//     console.log(error);
// }).finally(function(){
//     console.log("at the end finaly im the last");
// })


const promisFive = new Promise(function(resolve,reject){
    setTimeout(() => {
        let error = true;
        if(!error){
            resolve({username: "sameer",password:"12345"})
        } else{
            reject("eror");
        }
    }, 1000);
})

async function consumeFive(){
   try {
    const respnse = await promisFive
    console.log(respnse);
   } catch (error) {
    console.log(error);
   }
}

consumeFive()


