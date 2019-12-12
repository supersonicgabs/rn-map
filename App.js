import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Mapa from './map'
import MapView from "react-native-map-clustering";
import { Marker } from "react-native-maps";

export default function App() {
  return (
    <View style={styles.container}>
      <Mapa />
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
