const defaultState = {
  city: '',
  latlong: '',
  pressure: '',
  humidity: '',
  temp: '',
  templow: '',
  temphigh: '',
  wind: '',
  name: '',
  date: '',
  icon: '',
  history: [],
  error: ''
};

export default function SearchReducer(state = defaultState, action) {
  const { type, payload } = action;
  switch (type) {
    case 'UPDATE_CITY_INPUT': {
      return {
        ...state,
        city: payload.city
      };
    }

    case 'UPDATE_CITY_TAB': {
      return {
        ...state,
        city: payload.city
      };
    }

    case 'GET_WEATHER_FULFILLED': {
      return {
        ...state,
        latlong: action.payload.data.coord,
        pressure: action.payload.data.main.pressure,
        humidity: action.payload.data.main.humidity,
        temp: action.payload.data.main.temp,
        templow: action.payload.data.main.temp_min,
        temphigh: action.payload.data.main.temp_max,
        wind: action.payload.data.wind.speed,
        date: new Date(),
        name: action.payload.data.name,
        icon: action.payload.data.weather[0].icon,
        history: [
          ...state.history,
          { name: action.payload.data.name, date: new Date() }
        ],
      };
    }

    case 'GET_WEATHER_REJECTED': {
      return {
        ...state,
        error: action.payload
      };
    }

    default: {
      return state;
    }
  }
}
