// JavaScript for fetching weather data
const apiKey = 'YOUR_API_KEY'; // Replace with your API key
const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';

function getWeather() {
  const location = document.getElementById('search').value;
  const url = `${weatherUrl}${location}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      displayWeather(data);
    })
    .catch(error => {
      console.log('Error fetching weather:', error);
    });
}

function displayWeather(data) {
  const weatherInfo = document.getElementById('weather-info');
  weatherInfo.innerHTML = `
    <h2>${data.name}, ${data.sys.country}</h2>
    <p>Temperature: ${data.main.temp}°C</p>
    <p>Weather: ${data.weather[0].description}</p>
    <p>Humidity: ${data.main.humidity}%</p>
  `;
}
