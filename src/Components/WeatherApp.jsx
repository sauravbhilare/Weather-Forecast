import React from "react";
import DetectingLocation from "./DetectingLocation"; // Adjust if needed
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const WeatherApp = () => {
  const [time, setTime] = React.useState(new Date());
  const [location, setLocation] = React.useState({
    latitude: null,
    longitude: null,
  });
  const [locationAllowed, setLocationAllowed] = React.useState(false);

  const apiKey = "2d8a09b0a1dc2c4b56be9efc392e59b3"; // OpenWeatherMap API key

  const [currentWeather, setCurrentWeather] = React.useState({
    temperature: null,
    condition: "",
    humidity: null,
    visibility: null,
    windSpeed: null,
    icon: "",
    city: "",
    country: "",
  });

  const [searchCity, setSearchCity] = React.useState("");
  const [searchWeather, setSearchWeather] = React.useState({
    temperature: null,
    condition: "",
    humidity: null,
    visibility: null,
    windSpeed: null,
    icon: "",
    city: "",
    country: "",
  });

  // Update time every second
  React.useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Get user coordinates
  React.useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setLocation({
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude,
          });
          setLocationAllowed(true);
        },
        (err) => {
          console.error(err.message);
          setLocationAllowed(true);
        }
      );
    } else {
      setLocationAllowed(true);
    }
  }, []);

  // Helper: get GIF path based on weather condition
  const getWeatherIcon = (condition) => {
    switch (condition.toLowerCase()) {
      case "clear":
        return "src/assets/clear.gif";
      case "clouds":
        return "src/assets/cloud.gif";
      case "rain":
      case "drizzle":
        return "src/assets/rain.gif";
      case "snow":
        return "src/assets/snow.gif";
      case "haze":
      case "mist":
      case "fog":
        return "src/assets/foggy.gif";
      default:
        return "src/assets/clear.gif";
    }
  };

  // Fetch weather for current location
  React.useEffect(() => {
    if (location.latitude && location.longitude) {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&units=metric&appid=${apiKey}`
      )
        .then((res) => res.json())
        .then((data) => {
          if (data && data.weather) {
            const condition = data.weather[0].main;
            const updatedWeather = {
              temperature: Math.round(data.main.temp),
              condition: condition,
              humidity: data.main.humidity,
              visibility: (data.visibility / 1000).toFixed(1),
              windSpeed: data.wind.speed,
              icon: getWeatherIcon(condition),
              city: data.name,
              country: data.sys.country,
            };
            setCurrentWeather(updatedWeather);
            setSearchWeather(updatedWeather);
          }
        })
        .catch((err) => console.error("Error fetching current weather:", err));
    }
  }, [location]);

  // Fetch weather for searched city
  const fetchSearchWeather = (cityName) => {
    if (!cityName) return;
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data && data.weather) {
          const condition = data.weather[0].main;
          setSearchWeather({
            temperature: Math.round(data.main.temp),
            condition: condition,
            humidity: data.main.humidity,
            visibility: (data.visibility / 1000).toFixed(1),
            windSpeed: data.wind.speed,
            icon: getWeatherIcon(condition),
            city: data.name,
            country: data.sys.country,
          });
        }
      })
      .catch((err) => console.error("Error fetching search weather:", err));
  };

  // Format date
  const dateBuilder = (d) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return `${days[d.getDay()]} ${d.getDate()} ${
      months[d.getMonth()]
    } ${d.getFullYear()}`;
  };

  if (!locationAllowed) return <DetectingLocation />;

  return (
    <div className="WeatherApp">
      <div className="weather-container">
        {/* LEFT PANEL */}
        <div className="left-panel">
          <h1 className="forecast-heading">Weather Forecast</h1>
          <div className="cityName">
            <h2>{currentWeather.city || "Detecting..."}</h2>
            <h4>{currentWeather.country || ""}</h4>
          </div>
          <div className="time-temp">
            <div className="time-date">
              <h2 className="time">{time.toLocaleTimeString("en-US")}</h2>
              <p className="date">{dateBuilder(new Date())}</p>
            </div>
            <div className="temp">
              <h2 className="temperature">
                {currentWeather.temperature !== null
                  ? `${currentWeather.temperature}°C`
                  : "..."}
              </h2>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="right-panel">
          <div className="weather-icon">
            {searchWeather.icon && (
              <img src={searchWeather.icon} alt="Weather Icon" />
            )}
          </div>
          <h2 className="condition">{searchWeather.condition || "..."}</h2>

          <div className="search-bar">
            <input
              type="text"
              placeholder="Search any city"
              value={searchCity}
              onChange={(e) => setSearchCity(e.target.value)}
            />
            <button onClick={() => fetchSearchWeather(searchCity)}>
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>

          <h3 className="city">
            {searchWeather.city && searchWeather.country
              ? `${searchWeather.city}, ${searchWeather.country}`
              : "Search for a city"}
          </h3>

          <div className="details">
            <p>
              <span>Temperature:</span>{" "}
              {searchWeather.temperature !== null
                ? `${searchWeather.temperature}°C`
                : "..."}
            </p>
            <p>
              <span>Humidity:</span>{" "}
              {searchWeather.humidity !== null
                ? `${searchWeather.humidity}%`
                : "..."}
            </p>
            <p>
              <span>Visibility:</span>{" "}
              {searchWeather.visibility !== null
                ? `${searchWeather.visibility} km`
                : "..."}
            </p>
            <p>
              <span>Wind Speed:</span>{" "}
              {searchWeather.windSpeed !== null
                ? `${searchWeather.windSpeed} m/s`
                : "..."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
