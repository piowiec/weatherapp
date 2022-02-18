const API_KEY = `0c8f1b00f49f24ff1dce570dff53e4d0`;
const cityTemp = document.getElementById("Temperature")
const cityName = document.getElementById("CityName")
const cloudsBar = document.getElementById("CityClouds")
const humidityBar = document.getElementById("CityHumidity")
const cityWind = document.getElementById("CityWind")






const showWeatherByLocation = (pos) => {
    const coords = pos.coords
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=${API_KEY}`;
    fetch(URL).then((res) => res.json())
    .then((res) => weatherInfo(res))
    .catch((err) => console.log(err))
    .finally(() => console.log("Kończe działanie wynikiem....."));
};


const weatherInfo = (info) => {
        const{ clouds,coords, main, sys, weather, wind, name} = info;
        console.log(main.temp);


        cityName.textContent = name; 
        Temperature.textContent = convertToCelsius(main.temp) + "°C";
        
        cloudsBar.value = clouds.all;
        humidityBar.value = main.humidity;
        cityWind.textContent = wind.speed + "Km/h";

};    




const getMyTemp = () => {
    navigator.geolocation.getCurrentPosition((pos) => showWeatherByLocation(pos));
};
getMyTemp();

const convertToCelsius = (temp) => Math.round(temp - 273.15);















