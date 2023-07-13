import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import CurrentWeather from './src/components/CurrentWeather';
import UpcomingWeather from './src/components/UpcomingWeather';

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <UpcomingWeather />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
