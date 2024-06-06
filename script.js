const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'db4d2ae8e2msh2d6c8b9b0389ca6p15be99jsnbff998dffec0',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
const getWeather = (city)=>{
cityName.innerHTML = city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city ,options)
.then(response => response.json())
.then(response => {

console.log(response)
cloud_pct.innerHTML = response.cloud_pct
temp.innerHTML = response.temp
feels_like.innerHTML = response.feels_like
humidity.innerHTML = response.humidity
min_temp.innerHTML = response.min_temp
max_temp.innerHTML =  response.max_temp
wind_speed.innerHTML = response.wind_speed
sunset.innerHTML = response.sunset
wind_degrees.innerHTML = response.wind_degrees
sunrise.innerHTML = response.sunrise

})
.catch(err => console.log(err));

}

submit.addEventListener("click",(e)=>{
    e.preventDefault() 
    getWeather(city.value)
})

getWeather("Delhi")




