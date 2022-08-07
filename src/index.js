import setInfo from "./infoManager";

const locInput = document.querySelector("input");
const searchButton = document.querySelector("button");
let loc;

async function getCurrentWeather() {
  try {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${loc}&APPID=586fd04639d371332e510190e8fa897c&units=metric`,
      { mode: "cors" }
    );
    if (response.ok) {
      return await response.json();
    }
  } catch (err) {
    throw new Error(err);
  }
}

async function getForecast() {
  try {
    const coords = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${loc},+46&limit=1&appid=586fd04639d371332e510190e8fa897c`
    );
    if (coords.ok) {
      const coordinates = await coords.json();
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates[0]["lat"]}&lon=${coordinates[0]["lon"]}&exclude=current,hourly,minutely,alerts&units=metric&appid=586fd04639d371332e510190e8fa897c`,
        { mode: "cors" }
      );
      if (response.ok) {
        return await response.json();
      }
    }
  } catch (err) {
    throw new Error(err);
  }
}

let searching = false;

searchButton.addEventListener("click", () => {
  if (!searching) {
    searching = true;
    loc = locInput.value;
    Promise.all([getCurrentWeather(), getForecast()])
      .then((values) => {
        setInfo(values[0], values[1]);
      })
      .finally(() => {
        searching = false;
      });
  }
});
