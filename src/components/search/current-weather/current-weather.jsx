import "./current-weather.css";

const CurrentWeather = () => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">London</p>
          <p className="weather-type">Cloudy</p>
        </div>
        <img alt="weather" className="weather-icon" src="icons/01d.png" />
      </div>
      <div className="bottom">
        <p className="temperature">5C</p>
        <div className="details">
          <div className="para-row">
            <span className="para-label top">Details</span>
          </div>
          <div className="para-row">
            <span className="para-label">Feels like</span>
            <span className="para-value">22C</span>
          </div>
          <div className="para-row">
            <span className="para-label">Wind</span>
            <span className="para-value">2m/s</span>
          </div>
          <div className="para-row">
            <span className="para-label">Humidity</span>
            <span className="para-value">15%</span>
          </div>
          <div className="para-row">
            <span className="para-label">Pressure</span>
            <span className="para-value">15hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
