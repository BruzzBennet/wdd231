const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&appid=e2e370d650b23102b4973a78c410cce6&units=metric';

async function apiFetch(){
    try {
        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();
          console.log(data); // 
          displayResults(data);
        } else {
            throw Error(await response.text());
        }
      } catch (error) {
          console.log(error);
      }
}

apiFetch();

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('alt', desc);
    weatherIcon.setAttribute('src', iconsrc);
    captionDesc.textContent = `${desc}`;
  }