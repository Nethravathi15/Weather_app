// import logo from './logo.svg';
// import TomorrowWidget from './components/TomorrowWe÷atherWidget';
import './App.css';
// import GeoLocation from './components/geoLocation';
import WeatherComponent from './components/currentWeather';
import WeatherForecast from './components/WeatherForecast'
function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      {/* <GeoLocation /> */}
      <WeatherComponent />     
      <WeatherForecast />
      
    </div>
  );
}

export default App;
