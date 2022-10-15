const convertBtn = document.getElementById("convert-btn")
const numberInput = document.getElementById("number-input")
const resetBtn = document.getElementById("reset-btn")
const lightCheckbox = document.getElementById("light-checkbox")
const body = document.getElementById("body")
const resultDivLength = document.getElementById("result-div-length")
const resultDivVolume = document.getElementById("result-div-volume")
const resultDivMass = document.getElementById("result-div-mass")

const lengthResult = document.getElementById("length-result")
const volumeResult = document.getElementById("volume-result")
const massResult = document.getElementById("mass-result")


/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

convertBtn.addEventListener("click", function(){
    const feet = numberInput.value * 3.281
    const meter = numberInput.value / 3.281

    lengthResult.innerHTML = `${numberInput.value} meters = ${feet.toFixed(3)} feet | ${numberInput.value} feet = ${meter.toFixed(3)} meters`
    
    const gallon = numberInput.value * 0.264
    const liter = numberInput.value * 3.785
     
    volumeResult.innerHTML = `${numberInput.value} liters = ${gallon.toFixed(3)} gallons | ${numberInput.value} gallons = ${liter.toFixed(3)} liters`
    
    const kilogram = numberInput.value * 2.204
    const pound = numberInput.value * 0.453
    
    massResult.innerHTML = `${numberInput.value} kilograms = ${kilogram.toFixed(3)} pounds | ${numberInput.value} pounds = ${pound.toFixed(3)} kilograms`
})

resetBtn.addEventListener("click", function(){
    numberInput.value = ""
    lengthResult.innerHTML = `Hello, it seems that you have just clicked the reset button. :D`
    volumeResult.innerHTML = `In order to see the results, simply insert the number into the input field and click the Convert button!`
    massResult.innerHTML = `Have fun, I hope that this will come in handy! :D`
})

lightCheckbox.addEventListener("click", function(e){
   if (lightCheckbox.checked === true) {
       body.classList.toggle("lightMode")
       e.preventDefault()
    } else if (lightCheckbox.checked == false) {
        body.classList.toggle("darkMode")
        e.preventDefault()
   }
   console.log(lightCheckbox.checked)
})

