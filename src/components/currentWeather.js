import React, { useState, useEffect } from 'react';
import fetchWeatherData from '../api/weatherApi';
import { getLocationAPI } from '../api/geolocationAPI';
import { getWeatherDescription } from '../utils/getWeatherDescription';
import { formatDate } from '../utils/dateUtils';

const WeatherComponent = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [date, setDate] = useState("");
  const [day, setDay] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    const apiKey = 'vrHkYNNzUmidqBKPLpOhTdkbRQXVubdZ'; // Replace 'YOUR_API_KEY' with your Tomorrow.io API key
    
    const fetchData = async () => {
      try {
        const { latitude: fetchedLatitude, longitude: fetchedLongitude, error: locationError } = await getLocationAPI();
        if (locationError) {
          throw new Error(locationError);
        }
        const data = await fetchWeatherData(apiKey, fetchedLatitude, fetchedLongitude);
        setWeatherData(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Log weatherData whenever it changes
    console.log("weatherData", weatherData);
    
    // Update date, day, and time when weatherData changes
    if (weatherData) {
      const { date: formattedDate, day: formattedDay, time: formattedTime } = formatDate(weatherData.data.time);
      setDate(formattedDate);
      setDay(formattedDay);
      setTime(formattedTime);
    }
  }, [weatherData]);

  return (
    <div>
      <h2>Current Weather</h2>
      {loading && <p>Loading...</p>}

      {weatherData && (
        <div>
          <p>Date: {date}</p>
          <p>Day: {day}</p>
          <p>Time: {time}</p>
          <p>Temperature: {weatherData.data.values.temperature}°C</p>
          <p>Feels Like: {weatherData.data.values.temperatureApparent}°C</p>
          <p>Description: {getWeatherDescription(weatherData.data.values.weatherCode)}</p>
          <p>Wind Speed: {weatherData?.data?.values?.windSpeed} m/s</p>
          <p>Location: {weatherData?.location?.lat},{weatherData?.location?.lon}</p>
          {/* <p>Place: {place}</p>  */}
        </div>
      )}
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default WeatherComponent;
