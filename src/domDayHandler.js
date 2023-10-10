const insertDays = function(dataDays,city)
{
    if(dataDays !== "error")
    {
        console.log(city)
        const currentCityDiv = document.querySelector('.currentLocation');
        currentCityDiv.textContent = "Current Location: "+ city;
        for(let i = 0;i<dataDays.length;i++)
    {
        const forecastDay = dataDays[i].day
        makeDay(forecastDay.avghumidity,forecastDay.avgtemp_c,forecastDay.condition.text,forecastDay.maxwind_kph,forecastDay.totalprecip_in,i)
    }
    }
}

const makeDay = function(humidity,temp,condition,maxWind,rainChance,number)
{
    const content = document.querySelector('.displayContent')
    const tasks = content.querySelectorAll('.taskHolder')
    const humidityDiv = tasks[number].querySelector('.humidity')
    const tempDiv = tasks[number].querySelector('.temperature')
    const conditionDiv = tasks[number].querySelector('.condition')
    const WindSpeedDiv = tasks[number].querySelector('.wind')
    const rainchanceDiv = tasks[number].querySelector('.rain')
    humidityDiv.textContent = "humidity: "+humidity +"%"
    tempDiv.textContent = temp + "°"
    conditionDiv.textContent = condition
    WindSpeedDiv.textContent = "WindSpeed: "+ maxWind
    rainchanceDiv.textContent = "chance of rain: "+rainChance +"%"
}

export {insertDays}