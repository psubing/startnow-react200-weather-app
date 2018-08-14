import { connect } from 'react-redux';
import Search from './Search';

function mapStoreToProps(store) {
  return {
    city: store.search.city,
    latlong: store.search.latlong
  };
}

export default connect(mapStoreToProps)(Search);
