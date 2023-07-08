import React from 'react';
import {StyleSheet, Text} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Current Wheather</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'purple'
  },
  text: {
    fontSize: 25,
    fontWeight: '500',
  },
});

export default App;