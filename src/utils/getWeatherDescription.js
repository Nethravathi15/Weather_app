import weatherData from '../assets/weatherCodes.json'


export const getWeatherDescription = (weatherCode) => {
  // Access the weather description using the provided weather code
  return weatherData.weatherCode[weatherCode] || "Unknown"; // If weather code not found, return "Unknown"
};
