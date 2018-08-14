import { connect } from 'react-redux';
import History from './history';

function mapStoreToProps(store) {
  return{
    history: store.search.history,
    date: store.search.date
  };
}

export default connect(mapStoreToProps)(History);
