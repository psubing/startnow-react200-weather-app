import { connect } from 'react-redux';
import CityInfo from './cityinfo';

function mapStoreToProps(store) {
  return{
    latlong: store.search.latlong,
    pressure: store.search.pressure,
    humidity: store.search.humidity,
    temp: store.search.temp,
    templow: store.search.templow,
    temphigh: store.search.temphigh,
    wind: store.search.wind,
    icon: store.search.icon,
    date: store.search.date,
    history: store.search.history,
    name: store.search.name
  };
}

export default connect(mapStoreToProps)(CityInfo);
