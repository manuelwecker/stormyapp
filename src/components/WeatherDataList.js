import React from "react";
import { getWeather } from "../api/weather";
import styled from "@emotion/styled";

export default function WeatherList() {
  const [weather, setWeather] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  console.log(weather);

  async function refreshWeather() {
    setLoading(true);
    const gotWeatherData = await getWeather();
    setLoading(false);
    setWeather(gotWeatherData);
  }

  // React.useEffect(() => {
  //   refreshWeather();
  // }, []);

  return (
    <div>
      {weather.map(weather => (
        <div key={weather.id}>{weather.description}</div>
      ))}
    </div>
  );
}
