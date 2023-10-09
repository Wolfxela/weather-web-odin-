const insertDays = function(dataDays)
{
    console.log(dataDays)
    if(dataDays !== "error")
    {
        for(let i = 0;i<dataDays.length;i++)
    {
        const forecastDay = dataDays[i].day
        makeDay(forecastDay.avghumidity,forecastDay.avgtemp_c,forecastDay.condition.text,forecastDay.maxwind_kph,forecastDay.totalprecip_in)
    }
    }
}

const makeDay = function(humidity,temp,condition,maxWind,rainChance)
{
    console.log("humidity: "+humidity)
    console.log("temperature: "+temp)
    console.log("Condition: "+condition)
    console.log("WindSpeed: "+maxWind)
    console.log("chance of rain: "+rainChance)
}

const removeDays = function()
{

}

export {insertDays}