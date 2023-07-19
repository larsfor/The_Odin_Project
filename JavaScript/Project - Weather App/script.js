const form = document.getElementById("weatherForm");

form.addEventListener("submit", (e) => {    
    getWeather(form.location.value);
    e.preventDefault();
})

async function getWeather(search) {

    
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=a3e5825519514673ae0224222231807&q=${search}`, {mode: 'cors'});
        const weaterInfo = await response.json();
        renderWeatherInfo(weaterInfo);
    } catch(error) {
        console.log(error);
    }
}

function renderWeatherInfo(weatherInfo) {
    const weatherLocation = document.getElementById("weatherLocation");
    const weatherRegion = document.getElementById("weatherRegion");
    const weatherCountry = document.getElementById("weatherCountry");
    const weatherTempC = document.getElementById("weatherTempC");
    const weatherTempF = document.getElementById("weatherTempF");
    const weatherImage = document.getElementById("weatherImage");
    const weatherText = document.getElementById("weatherText");
    const weatherWindKph = document.getElementById("weatherWindKph");
    const weatherWindMph = document.getElementById("weatherWindMph");

    weatherLocation.textContent = weatherInfo.location.name;
    weatherRegion.textContent = weatherInfo.location.region;
    weatherCountry.textContent = weatherInfo.location.country;
    weatherTempC.textContent = weatherInfo.current.temp_c;
    weatherTempF.textContent = weatherInfo.current.temp_f;
    weatherImage.src = `https://${weatherInfo.current.condition.icon.slice(2)}`;
    weatherText.textContent = weatherInfo.current.condition.text;
    weatherWindKph.textContent = weatherInfo.current.wind_kph;
    weatherWindMph.textContent = weatherInfo.current.wind_mph;
}