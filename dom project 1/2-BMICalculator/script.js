const form = document.querySelector("form")

form.addEventListener("submit", function(event){
    event.preventDefault()

    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const results = document.querySelector("#results")

    if(height === "" || height < 1 || isNaN(height)){
        results.innerHTML = "enter the valid height "
    } else if(weight === "" || weight < 1 || isNaN(weight)){
        results.innerHTML = "enter the valid weight "
    } else {
      const bmi = (weight / ((height*height)/  10000)).toFixed(2)

      results.innerHTML = `<h1>${bmi}<h1/>` 
    }

})

































// const form = document.querySelector("form");

// form.addEventListener("submit", function(event){
//     event.preventDefault();

//     const height = parseInt(document.querySelector("#height").value);
//     const weight = parseInt(document.querySelector("#weight").value);
//     const results = document.querySelector("#results");

//     if(height === "" || height < 0 || isNaN(height)){
//         results.innerHTML = "Enter valid height "
//     } else if (weight === "" || weight < 0 || isNaN(weight)) {
//         results.innerHTML = "enter valid weight"
//     } else {
//        const bmiFormula = (weight / ((height*height) / 10000)).toFixed(2);

//        results.innerHTML = `<span>${bmiFormula}</span>`
//     }
// })


// const form = document.querySelector("form");

// form.addEventListener("submit", function(event){
//     event.preventDefault();
    
//     const height = parseInt(document.querySelector("#height").value);
//     const weight = parseInt(document.querySelector("#weight").value);
//     const results = document.querySelector("#results");
    
//     if (height === "" || height < 0 || isNaN(height)) {
//         results.innerHTML = "enter valid height "
//     } else if (weight === "" || weight < 0 || isNaN(weight)) {
//         results.innerHTML = "enter valid weight "
//     } else {
//         const bmi = (weight /((height*height)/10000)).toFixed(2);
//         results.innerHTML = `${bmi}`
//     }
// })