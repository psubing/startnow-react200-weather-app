import axios from 'axios';

export const foo = () => ({
  type: 'FOO',
  payload: new Promise()
});

export const getWeather = (city) => ({
  type: 'GET_WEATHER',
  payload: axios.get('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=c5ef81804cafcde42ba25dc249dbffad').catch(err => { console.log(err); alert('City not found!') })//.then(res => res.json)
});

export function inputCity(city) {
  return {
    type: 'UPDATE_CITY_INPUT',
    payload: { city }
  };
}

export function tabCity(city) {
  return {
    type: 'UPDATE_CITY_TAB',
    payload: { city }
  };
}
