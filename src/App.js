import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import WeatherDisplay from "./components/WeatherDisplay";

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const handleSearch = () => {
    const apiKey = "37562f7e34b9441ab7d95338231210";
    const endpoint =
      "http://api.weatherapi.com/v1/current.json?key=" + apiKey + "&q=" + city;
    if (!city.trim()) {
      alert("Please enter a city before searching.");
      return;
    }
    fetch(endpoint)
      .then((response) => response.json())
      .then((data) => setWeatherData(data))
      .catch((error) => console.error(error));
  };

  return (
    <div className="App">
      <Header></Header>
      <div className="container">
        <SearchBar
          currentCityValue={city}
          updateCityValue={setCity}
          onSearchClick={handleSearch}
        />
        <WeatherDisplay data={weatherData} />
      </div>
    </div>
  );
}

export default App;
