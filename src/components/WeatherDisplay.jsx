import React from 'react';
import './weatherDisplay.css';

function WeatherDisplay(props) {
  if (!props.data) {
    return <div className='weather-display'>Please enter a city to see its weather.</div>;
  }

  return (
    <div className='weather-display'>
      <h2 className='city-name'>{props.data.location.name}, {props.data.location.country}</h2>
      <p className="temperature">{props.data.current.temp_c}°C</p>
      <p className="description">{props.data.current.condition.text}</p>
      <img src={props.data.current.condition.icon} alt="Weather condition" />
    </div>
  );
}

export default WeatherDisplay;
