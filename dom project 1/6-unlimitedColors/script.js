// genrate rendom color

const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let stop;
const changeColor = function () {
  const newColor = function () {
    document.body.style.backgroundColor = randomColor();
  };
  if(!stop){
      stop = setInterval(newColor, 1000);
  }
};
// console.log(changeColor());

const stopChangeColor = function () {
  clearInterval(stop);
  stop = null;
};
document.querySelector("#start").addEventListener("click", changeColor);
document.querySelector("#stop").addEventListener("click", stopChangeColor);
