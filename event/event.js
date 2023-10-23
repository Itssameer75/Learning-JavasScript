// +++++++++++ to study this event+++++++++++++++++++

// type, timeStamp, preventDEfalut,
// target , toElemet, srcElement , currentTarget
// clientX, clientY, screenX , screenY
// altKey ,,ctrlKey shiftKey ,keyCOde

/////000000//***************************** */

// document.querySelector(".img").addEventListener(
//   "click",
//   function (e) {
//     console.log("click in the ul");

//   },
//   false
//   // false //bubling mode
// );
// document.querySelector("#camera").addEventListener(
//   "click",
//   function (e) {
//     console.log("click on camera");
//     e.stopPropagation() //when you dont want bubling
//   },
//   false
//  // true // capturing mode
// );

// document.getElementById("google").addEventListener("click", function(e){
//     e.preventDefault()
//     e.stopPropagation()
//     console.log("clicked");
// },false)

// 1 +++++++++++++++++++++++

document.querySelector(".img").addEventListener(
  "click",
  function (e) {
    // console.log(e.target.parentNode);
    console.log(e.target.tagName);
    if (e.target.tagName === "IMG") {
      const removeIt = e.target.parentNode;
      removeIt.remove();
      console.log(e.target.id);
    }
    // removeIt.parentNode.removeChild(removeIt) // second methode to  remove
  },
  false
);
