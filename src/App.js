import React, {useState} from 'react';
import './App.css';

const api = {
  key: '9b683aa46e3e257910433cfadb9afd58',
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  const [searchLocation, setSearchLocation] = useState('')
// 
  return (
    <div className="App">
      <div className="main">
        <div className="search-box">
          <input 
            className="search-bar" 
            type="text"
            placeholder="Search the location..."
            value={searchLocation}
            onChange={(e) => setSearchLocation(e.target.value)}
          />
        </div>
        <div className="location-box">
          <div className="location">London, GB</div>
          {/* <div className="location-date">{dateBuilder(new Date)}</div> */}
        </div>
        <div className="weather-box">
          <div className="temp">10°C</div>
          <div className="weather">Sunny</div>
        </div>
      </div>
    </div>
  );
}

export default App;
