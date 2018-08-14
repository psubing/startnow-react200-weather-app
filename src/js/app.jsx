/* jshint esversion: 6 */

import React from 'react';
import Header from './components/header';
import Search from './components/Search';
import Cityinfo from './components/Cityinfo';
import History from './components/History';

export default class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <Header />
        <Search />
        <div className='row'>
          <Cityinfo />
          <History />
        </div>
      </div>
    );
  }
}
