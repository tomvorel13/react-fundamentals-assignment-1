import axios from 'axios';

export function getWeatherInfo(city) {
  const API_KEY = 'c5c58670c32db956ece142ae13d1759f';
  const chosenCity = city;

  return axios
    .get(
      `http://api.openweathermap.org/data/2.5/weather?q=${chosenCity}&type=accurate&APPID=${API_KEY}`
    )
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });
}

export function get5dayForecast(city) {
  const API_KEY = 'c5c58670c32db956ece142ae13d1759f';
  const chosenCity = city;

  axios
    .get(
      `http://api.openweathermap.org/data/2.5/forecast/daily?q=${chosenCity}&type=accurate&APPID=${API_KEY}&cnt=5`
    )
    .then(response => {
      response.data;
    })
    .catch(error => {
      console.log(error);
    });
}
