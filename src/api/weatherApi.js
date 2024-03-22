const fetchWeatherData = async (apiKey, lat, long) => {
  try {
    const url = `https://api.tomorrow.io/v4/weather/realtime?apikey=${apiKey}&location=${lat},${long}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Failed to fetch weather data');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export default fetchWeatherData;
