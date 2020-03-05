import React, {useState} from 'react';
import './App.css';

const api = {
  key: '9b683aa46e3e257910433cfadb9afd58',
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  const [query, setQuery] = useState('')
  const [weather, setWeather] = useState('')

  const dateBuilder = (d) => {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let day = days[d.getDay()];
    let date =  d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    return `${day}, ${date} ${month} ${year}`
  }
  
  const search = async (e) => {
    if(e.key === 'Enter') {
      fetch(`${api.base}weather?q=${query}&appid=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setWeather(result);
        setQuery('');
        console.log(result);
      });
    }
  }
  const backGround = (value) => {
    console.log (value);
    return value === ('Clear' || 'Sunny') ?
      '' : 
      value === ('Rain' || 'Drizzle') ? 
        'rain' : 
          value === 'Mist' || 'Haze' ?
          'cold' :
          value === 'Clouds'?
            'cloudy' :
            '';
  }
  return (
    <div className={`App ${weather.weather && backGround(weather.weather[0].main)}`}>
      <div className="main">
        <div className="search-box">
          <input 
            className="search-bar" 
            type="text"
            placeholder="Search the location..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={search}
          />
        </div>
          {weather.weather && (
            <>
              <div className="location-box">
                <div className="location">{weather.name}, </div>
                <div className="date">{dateBuilder(new Date)}</div>
              </div>
              <div className="weather-box">
                <div className="temp">{Math.round(weather.main.temp - 273.15)}°C</div>
                <div className="weather">{weather.weather && weather.weather[0].main}</div>
              </div>
            </>
          )}
      </div>
    </div>
  );
}

export default App;
