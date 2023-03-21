

async function getWeather() {
    const value = document.getElementById("city").value;
    if (!value) {
        return;
    }
    
    const result = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${value}&units=metric&appid=4f2dc3fdc2e0147e35fbe28a4eab2142&lang=pt_br`)
    if (result.status !== 200) {
        const displayElement = document.getElementById("display");
        displayElement.style.display = "none";
        const errorElement = document.getElementById("error");
        errorElement.style.display = "flex";
        return;
    }

    const data = await result.json();
    const windSpeed = data.wind.speed;
    const temperature = data.main.temp;
    const humidity = data.main.humidity;
    const city = data.name;
    
    const errorElement = document.getElementById("error");
    errorElement.style.display = "none";
    const initElement = document.getElementById("init");
    initElement.style.display = "none";
    const displayElement = document.getElementById("display");
    displayElement.style.display = "flex";

    document.getElementById("windSpeed").innerHTML = `${windSpeed} m/s`;
    document.getElementById("temperature").innerHTML = `${temperature} °C`;
    document.getElementById("humidity").innerHTML = `${humidity} %`;
    document.getElementById("cityName").innerHTML = `${city}`;

}   