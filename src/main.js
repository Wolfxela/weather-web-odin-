import { insertDays } from "./domDayHandler";
async function getData(city)
{
    try
    {
    const apikey = "http://api.weatherapi.com/v1/forecast.json?key=54f04930550144f0b9c04423230710&q="+city+"&days=3&aqi=yes&alerts=yes"
    const response = await fetch(apikey,{mode:"cors"})
    const data = await response.json()
    const dataDays = data.forecast.forecastday
    localStorage.setItem("city",data.location.name)
    return dataDays
    
    }
    catch(error)
    {
        return "error"
    }


}


// const formInput = document.querySelector('.cityInput')
// const formSubmit = document.querySelector('.submit')


// formSubmit.addEventListener("click",function(){
//     insertDays(getData(formInput.value))
//     document.querySelector('.city').value = formInput.value
//     localStorage.setItem("city",formInput.value)
// })

if(!localStorage.getItem("city"))
{
    insertDays(await getData("London"))
    
}
else
{
    console.log(localStorage.getItem("city"))
    insertDays(await getData(localStorage.getItem("city")))
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