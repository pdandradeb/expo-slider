import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import Slider from '@react-native-community/slider';

const thumb = require('./assets/drag-button.png');

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={thumb} />
      <Slider
        style={{ width: '100%' }}
        thumbImage={thumb}
        minimumValue={0}
        maximumValue={100}
        step={1}
        value={50}
      />
      <StatusBar style="auto" />
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
