import React from 'react';

export default class CityInfo extends React.Component {
  render() {
    const { name, latlong, pressure, humidity, templow, temphigh, wind, temp, icon } = this.props;
    var coord = JSON.stringify(latlong.lat) + "," + JSON.stringify(latlong.lon);
    var temperature = (((9/5)*(temp - 273)) + 32).toFixed(2);
    var lowtemp = (((9/5)*(templow - 273)) + 32).toFixed(2);
    var hightemp = (((9/5)*(temphigh - 273)) + 32).toFixed(2);
    var speed = (wind * 2.23694).toFixed(2);
    return(
      <div className="col-sm-6">
        <div className="card">
          <div className="card-header bg-dark text-white">City Information</div>
          <div className="card-body">
            {
            (latlong === '')
            ? <p className="card-text">Enter a city or click a tab to get its current weather information.</p>
            : <div className="container">
                <div className="row">
                  <div className="col-lg text-center">
                    <h1>
                      <img src={`http://openweathermap.org/img/w/${icon}.png`} />
                      {name}
                    </h1>
                    <p>Lat/Long: {coord}</p>
                  </div>
                </div>
                <div className="dropdown-divider"></div>
                <div className="row">
                  <div className="col-sm text-center text-dark">
                    <p><strong>Temperature (F)</strong></p>
                    <p>{temperature}</p>
                  </div>
                  <div className="col-sm text-center text-dark">
                    <p><strong>Pressure</strong></p>
                    <p>{pressure}</p>
                  </div>
                  <div className="col-sm text-center text-dark">
                    <p><strong>Humidity</strong></p>
                    <p>{humidity}%</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm text-center text-dark">
                    <p><strong>Lowest Temp (F)</strong></p>
                    <p>{lowtemp}</p>
                  </div>
                  <div className="col-sm text-center text-dark">
                    <p><strong>Highest Temp (F)</strong></p>
                    <p>{hightemp}</p>
                  </div>
                  <div className="col-sm text-center text-dark">
                    <p><strong>Wind Speed</strong></p>
                    <p>{speed}mph</p>
                  </div>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    )
  }
}
