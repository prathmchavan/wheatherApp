import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Text>
          current wheather
        </Text>
        <Text style={styles.temp}>
          6
        </Text>
        <Text style={styles.feel}>
          feels like 5
        </Text>
        <View style={styles.hlwrapper}>
          <Text style={styles.hl}>
            High: 8
          </Text>
          <Text style={styles.hl}> Low: 6</Text>
        </View>



      </View>

      
      <View style={styles.bodywrapper}>
        <Text style={styles.description}>
          It is sunny outside
        </Text>
        <Text style={styles.message}>
          wheather is clear wear white cloths
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',

  },
  text: {
    fontSize: 25,
    fontWeight: '500',
  },
  wrapper: {

    backgroundColor: 'pink',
    flex: 1
  },
  temp: {
    color: 'black',
    fontSize: 48
  },
  feel: {
    color: 'black',
    fontSize: 30
  },
  hlwrapper: {
    flexDirection: 'row'
  }
  ,
  hl: {
    color: 'black',
    fontSize: 20
  },
  bodywrapper: {
    // flexGrow: 1,
    // alignSelf: 'stretch',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  description: {
    fontSize: 48
  },
  message: {
    fontSize: 30
  }




});

export default App;
