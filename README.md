# 🌦️ React Weather App

A modern weather application built with **React** that fetches real-time weather data from [OpenWeatherMap API](https://openweathermap.org/api).  
The app detects your **current location**, displays **live weather conditions**, and allows you to **search for any city worldwide**.

✨ Styled with **Glassmorphism & Gradient Effects** for a sleek UI.  
📍 Uses **Geolocation API** to detect location.  
🎨 Responsive design — works perfectly on desktop & mobile.

---

## 🚀 Features
- ✅ **Auto Location Detection** — detects your current city & weather.
- 🔍 **City Search** — search weather for any city.
- ⏰ **Live Time & Date Display**.
- 🌡️ **Weather Information**:
  - Temperature (°C)
  - Humidity (%)
  - Visibility (km)
  - Wind Speed (m/s)
- 🎭 **Dynamic Weather GIFs** based on conditions (☀️ Clear, 🌧️ Rain, ☁️ Clouds, ❄️ Snow, 🌫️ Fog).
- 🖼️ **Beautiful Backgrounds** with blur/glass effect.
- 📱 **Responsive** for all screen sizes.
- 🎞️ **Animated Loading Screen** while detecting location.

---

## 🛠️ Tech Stack
- React.js (Frontend framework)
- OpenWeatherMap API (Weather data provider)
- FontAwesome (Search icon)
- CSS3 with Glassmorphism Design
- Unsplash Images for backgrounds

---

## 🔗 Live Project

View the live project here:  
[https://your-live-project-url.com](https://your-live-project-url.com)

---

## ⚙️ Installation & Setup

1. **Clone the repository**

2. **Install dependencies**

3. **Get OpenWeatherMap API key**
- Sign up at [OpenWeather](https://openweathermap.org/)
- Create an API key.
- Replace your key in `WeatherApp.js`:
  ```
  const apiKey = "YOUR_API_KEY_HERE";
  ```

4. **Start the development server**


5. Open [http://localhost:3000](http://localhost:3000) in your browser

---

## 📂 Project Structure

```bash
react-weather-app/
│
├── public/ # Public assets accessible by the app directly
│ ├── index.html # Main HTML template
│ ├── WeatherIcons.gif # Loading/detecting location icon gif
│ ├── images/ # Background images and other static images
│ └── weather-icons/ # Weather condition GIFs and icons (clear.gif, rain.gif, etc.)
│
├── src/ # Source files of the React app
│ ├── assets/ # Static assets imported in code (gif, images)
│ │
│ ├── components/ # React components folder
│ │ ├── DetectingLocation.js # Loading component for location detection
│ │ ├── WeatherApp.js # Main weather app UI and logic
│ │ └── (other reusable components if needed)
│ │
│ ├── styles/ # CSS or SCSS files
│ │ └── styles.css # Main stylesheet with app styles
│ │
│ ├── App.js # Root app component
│ ├── index.js # Entry point for ReactDOM rendering
│ └── setupTests.js # (optional) Testing setup
│
├── .gitignore # Git ignore file
├── package.json # Project metadata and dependencies
├── README.md # Project README file
└── yarn.lock / package-lock.json # Dependency lock files
```


---

## 🎨 Weather Icons/GIFs Used
- ☀️ **Clear** → `clear.gif`
- ☁️ **Clouds** → `cloud.gif`
- 🌧️ **Rain/Drizzle** → `rain.gif`
- ❄️ **Snow** → `snow.gif`
- 🌫️ **Fog/Haze/Mist** → `foggy.gif`

---

## 👨‍💻 Author

Developed by **Saurav Bhilare**

