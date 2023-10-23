document.querySelector(".img").addEventListener("click",function(event){
    console.log(event.target.tagName);
    if(event.target.tagName === "IMG" || event.target.tagName === "A"){
        const removeIt = event.target.parentNode
        removeIt.remove()

    }

},false)

document.querySelector("#google").addEventListener("click",function(event){
    event.preventDefault();
},false)