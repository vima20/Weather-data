import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Position from './Components/Position';
import Weather from './Components/Weather';

export default function App() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  return (
    <View style={styles.container}>
      <Position onLocationChange={(lat, lon) => { setLatitude(lat); setLongitude(lon); }} />
      {latitude && longitude && <Weather latitude={latitude} longitude={longitude} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
