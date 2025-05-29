const form = document.getElementById('form')
// console.log(form)
form.addEventListener('submit', (e) => {
    e.preventDefault()
    const height = parseInt(document.getElementById("height").value)
    const weight = parseInt(document.getElementById("weight").value)
    console.log(height)
    console.log(weight)
    const results = document.getElementById("results")

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = "please give a valid height"
    }
    if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = "please give a valid weight"
    }
    
   const bmi = (weight / ((height*height)/10000)).toFixed(2);
//    console.log(BMI)
   results.innerHTML = `<span>${bmi}</span>`;
})