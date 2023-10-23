const xhr = new XMLHttpRequest();

const urlRequest = "https://api.github.com/users/itssameer75";

xhr.open("GET", urlRequest);
xhr.onreadystatechange = function () {
  console.log(xhr.readyState);
  if (this.readyState === 4) {
    const data = JSON.parse(this.responseText);
    console.log(data.avatar_url);
    console.log(data.name);
    console.log(data.bio);
    console.log(data.followers);
   document.querySelector(".show").addEventListener("click",function(){
    document.body.innerHTML = `
    <h1 style="text-align: center;">API PROJECT</h1>
    <hr>
    <div style=" display: flex; align-items: center; justify-content: center;">
    <div style=" height: 50%; width: 50%;">
    <img style="height="50px"; width="50px";  src="${data.avatar_url}">
    <h5>${data.name}</h5>
    <p>${data.bio}</p>
    <p>${data.followers}</p>
    
    </div>
    </div>
    `;
          
   })
  }}
xhr.send();
