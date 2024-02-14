import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';



const api = {
    url: process.env.EXPO_PUBLIC_API_URL,
    key: process.env.EXPO_PUBLIC_API_KEY,
    icons: process.env.EXPO_PUBLIC_ICONS_URL    
}

const Weather = ({ latitude, longitude }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=7c6d17c124b8c3d2327136dbf9a259f`)

      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data);
      })
      .catch((error) => {
        setErrorMsg(error.message);
      });
  }, [latitude, longitude]);

  return (
    <Text>
      {errorMsg ? errorMsg : weatherData ? `Temperature: ${weatherData.main.temp}, Description: ${weatherData.weather[0].description}` : 'Loading weather...'}
    </Text>
  );
};

export default Weather;
