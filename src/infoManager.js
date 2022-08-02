const locationTitle = document.querySelector("#title");
const locationName = document.querySelector("#location-name");
const currentTemp = document.querySelector("#temp");
const weather = document.querySelector("#weather");
const minTemp = document.querySelector("#min-temp");
const maxTemp = document.querySelector("#max-temp");
const feelsLike = document.querySelector("#feels-like");
const wind = document.querySelector("#wind");
const pressure = document.querySelector("#pressure");
const humidity = document.querySelector("#humidity");
const tomorrow = document.querySelector("#tomorrow");
const overTomorrow = document.querySelector("#overtomorrow");

function setInfo(todayObj, forecastObj) {
  locationTitle.textContent = todayObj.name;
  locationName.textContent = todayObj.name;
  currentTemp.textContent = `${todayObj.main.temp}°C`;
  weather.textContent = todayObj.weather[0]["main"];
  minTemp.textContent = `Min: ${todayObj.main.temp_min}°C`;
  maxTemp.textContent = `Max: ${todayObj.main.temp_max}°C`;
  feelsLike.textContent = `${todayObj.main.feels_like}°C`;
  wind.textContent = `${todayObj.wind.speed} m/s`;
  pressure.textContent = `${todayObj.main.pressure}hPa`;
  humidity.textContent = `${todayObj.main.humidity}%`;
  tomorrow.textContent = `Tomorrow: ${forecastObj.daily[1].temp.day}°C`;
  overTomorrow.textContent = `Day after tomorrow: ${forecastObj.daily[2].temp.day}°C`;
}

export default setInfo;
