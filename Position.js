import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import * as Location from 'expo-location';

const Position = ({ onLocationChange }) => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      onLocationChange(location.coords.latitude, location.coords.longitude);
    })();
  }, []);

  return (
    <Text>
      {errorMsg ? errorMsg : 'Retrieving position...'}
    </Text>
  );
};

export default Position;
