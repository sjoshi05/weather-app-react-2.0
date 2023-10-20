import "./App.css";
import Search from "./Components/Search";
import CurrentWeather from "./Components/CurrentWeather";
import Forecast from "./Components/Forecast";
import { useEffect, useState } from "react";

function App() {
  const [location, setLocation] = useState({ latitude: 0, longitude: 0 });
  const [error, setError] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setLocation({ latitude, longitude });
      },
      (error) => {
        setError(true);
      }
    );
  }, []);

  return (
    <div className="App">
      <h1 className="text-2xl">{JSON.stringify(location)}</h1>

      <Search />
      <CurrentWeather location={location} error={error} />
      <Forecast location={location} error={error} />
    </div>
  );
}

export default App;
