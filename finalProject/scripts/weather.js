const humidity = document.getElementById('humidity');
const temperature = document.getElementById('temp');
const cityName = document.getElementById('city-name');
const weatherIcon = document.getElementById('weather-icon');
const weatherDesc = document.getElementById('weatherDesc');
const weatherURL =
  'https://api.openweathermap.org/data/2.5/weather?lat=33.1581&lon=-117.3506&units=imperial&appid=d4456f801008884b9e94ccb1da5ff921';
async function weatherApiFecth() {
  try {
    const response = await fetch(weatherURL);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      weatherDisplay(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}
weatherApiFecth();
function weatherDisplay(weatherData) {
  cityName.innerHTML = `${weatherData.name}`;
  temperature.innerHTML = `${weatherData.main.temp.toFixed(0)}`;
  humidity.innerHTML = `${weatherData.main.humidity}`;

  const icon = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png

  `;
  const desc = weatherData.weather[0].description;
  const descString = String(desc);
  weatherDesc.textContent = descString;

  weatherIcon.setAttribute('src', icon);
  weatherIcon.setAttribute('alt', desc);
}
weatherDisplay();
