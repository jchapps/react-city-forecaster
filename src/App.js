import CurrentWeather from "./components/search/current-weather/current-weather";
import "./App.css";
import '../src/components/search/current-weather/current-weather.css'
import Search from "./components/search/Search";

function App() {
  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  };

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      <CurrentWeather/>
    </div>
  );
}

export default App;
