// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
let weather = {
  apiKey: 'd4456f801008884b9e94ccb1da5ff921',
};
const weatherURL =
  'https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=imperial&appid=d4456f801008884b9e94ccb1da5ff921';

async function apiFetch() {
  try {
    const response = await fetch(weatherURL);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // this is for testing the call
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

apiFetch();

const displayResults = (weatherData) => {
  currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(
    0
  )}</strong>`;

  const icon = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png

  `;
  const desc = weatherData.weather[0].description;
  const descString = String(desc);
  const descCapitalize = (descCap) => {
    const descWords = descCap.split(' ');
    for (let i = 0; i < descWords.length; i++) {
      descWords[i] = descWords[i][0].toUpperCase() + descWords[i].substring(1);
    }
    // descWords.join(' ');
    captionDesc.textContent = descWords.join(' ');
    // console.log(descWords);
  };

  descCapitalize(descString);
  weatherIcon.setAttribute('src', icon);
  weatherIcon.setAttribute('alt', desc);
};
