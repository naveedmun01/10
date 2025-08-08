import React, { useState } from "react";
import axios from "axios";

const API_KEY = "f4a84dce793432f2df171ece248115d9";

export default function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      setWeather(res.data);
    } catch (err) {
      alert("City not found");
    }
  };

  return (
    <div className="container">
      <h1>Mun Developers Weather</h1>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city..."
      />
      <button onClick={fetchWeather}>Get Weather</button>
      {weather && (
        <div className="card">
          <h2>{weather.name}</h2>
          <p>{weather.weather[0].main}</p>
          <p>{weather.main.temp}°C</p>
        </div>
      )}
    </div>
  );
}
