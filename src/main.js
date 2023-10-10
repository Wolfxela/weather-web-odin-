import { insertDays } from "./domDayHandler";
async function getData(city)
{
    try
    {
    const apikey = "http://api.weatherapi.com/v1/forecast.json?key=54f04930550144f0b9c04423230710&q="+city+"&days=3&aqi=yes&alerts=yes"
    const response = await fetch(apikey,{mode:"cors"})
    const data = await response.json()
    const dataDays = data.forecast.forecastday
    localStorage.setItem("city",city)
    return await dataDays
    
    }
    catch(error)
    {
        alert("please insert a valid city!")
        return "error"
    }


}
const formInput = document.querySelector('.cityInput')

document.addEventListener('keydown', function(event) {onEnter(event)});

async function onEnter(event)
{
    if(event.keyCode === 13) {
        console.log(formInput.value)
        const city = await getData(formInput.value)
        insertDays(city,formInput.value)
        document.querySelector('.currentLocation').value = "We are currently in: " + formInput.value
        formInput.textContent =""
    }

}

if(!localStorage.getItem("city"))
{
    insertDays(await getData("London"),"London")
    
}
else
{
    console.log("hawo")
    insertDays(await getData(localStorage.getItem("city")),localStorage.getItem("city"))
}
















































// const weatherData = function(inputTemp,InputWind,InputCondition,inputRain,inputHumidity)
// // {
// //     const temp = inputTemp;
// //     const rain = inputRain;
// //     const wind = InputWind;
// //     const condition = InputCondition;
// //     const humidity = inputHumidity


// //     return{temp,rain,wind,condition,humidity}

// // }//