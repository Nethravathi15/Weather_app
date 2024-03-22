const fetchWeatherForecast = async (location) => {
    // const API_KEY ='vrHkYNNzUmidqBKPLpOhTdkbRQXVubdZ';
    const options = {
      method: 'GET',
      headers: {
        Accept: 'application/json'
      }
    };
  
    try {
      const response = await fetch(`https://api.tomorrow.io/v4/weather/forecast?location=${encodeURIComponent(location)}&apikey=vrHkYNNzUmidqBKPLpOhTdkbRQXVubdZ`, options);
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('Failed to fetch weather forecast');
    }
  };
  
  export default fetchWeatherForecast;
  