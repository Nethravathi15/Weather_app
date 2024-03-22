import React, { useState, useEffect } from 'react';
import fetchWeatherForecast from '../api/foreCastingAPI';
import { getWeatherDescription } from '../utils/getWeatherDescription';

const WeatherForecast = () => {
  const location = 'new york'; // Set the location here

  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchWeatherForecast(location);
        setWeatherData(data);
        console.log("weatherforecast",weatherData)
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, [location]);



  if (error) {
    return <div>Error: {error}</div>;
  } else if (!weatherData) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <h2>5-Day Weather Forecast for {location}</h2>
        {/* <h2>{JSON.stringify(weatherData?.data?.timelines?.daily)}</h2> */}

      </div>
    );
  }
};

export default WeatherForecast;
