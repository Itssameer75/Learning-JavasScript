// async function getallUsers(){
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users")
//     const data = await response.json()
//     console.log(data);

//   } catch (error) {
//     console.log("eror...",error);
//   }
// }

// getallUsers()

// +++++++++++++++++++++++ promises ke through ++++++++++++++++++

fetch("https://api.github.com/users/itssameer75")
.then((response) => response.json())
.then((data) => console.log(data))
.catch((eror) => console.log(eror))