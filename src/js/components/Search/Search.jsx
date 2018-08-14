import React from 'react';
import { inputCity, tabCity, getWeather } from './searchActions';

export default class Search extends React.Component {
  constructor(props) {
    super(props);

    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.handleAddSearch = this.handleAddSearch.bind(this);
    this.handleTab = this.handleTab.bind(this);
  }

  handleSearchInput(event) {
    const { dispatch } = this.props;
    const { value } = event.target;
    console.log('jsx: ' + value)
    console.log('dispatch: ' + dispatch)
    dispatch(inputCity(value));
  }

  handleAddSearch() {
    const { city, dispatch } = this.props;
    dispatch(getWeather(city));
  }

  handleTab(event) {
    const { value } = event.target;
    const { dispatch } = this.props;
    dispatch(tabCity(value));
    dispatch(getWeather(value));
  }

  render() {
    return (
      <div>
        <div className='row'>
          <div className='btn-group'>
            <button type='button' value='San Diego' onClick={ this.handleTab } className='btn btn-dark'>San Diego</button>
            <button type='button' value='New York' onClick={ this.handleTab } className='btn btn-dark'>New York</button>
            <button type='button' value='District of Columbia' onClick={ this.handleTab } className='btn btn-dark'>Washington D.C.</button>
            <button type='button' value='London' onClick={ this.handleTab } className='btn btn-dark'>London</button>
            <button type='button' value='Tokyo' onClick={ this.handleTab } className='btn btn-dark'>Tokyo</button>
          </div>
        </div>
        <div className='row'>
          <div className='input-group mb-3 w-100'>
            <input
              type='text'
              onChange={ this.handleSearchInput }
              className='form-control'
              placeholder='Enter a city'
            />
            <div className='input-group-append'>
              <button
                className='btn btn-outline-dark'
                onClick={ this.handleAddSearch }
                type='button'
              >Go!</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

