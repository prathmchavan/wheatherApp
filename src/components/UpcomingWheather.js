/* eslint-disable prettier/prettier */
import React from 'react'
import { StyleSheet, Text, FlatList, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Feather as FeatherIcon } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

const DATA = [
  {
    dt_txt: '2022-08-30 16:00:00',
    main: {
      temp_max: 298.24,
      temp_min: 296.34
    },
    weather: [
      {
        main: 'Rain'
      }
    ]
  },
  {
    dt_txt: '2022-08-30 17:00:00',
    main: {
      temp_max: 296.31,
      temp_min: 296.2,
    },
    weather: [
      {
        main: 'Rain'
      }
    ]
  },
  {
    dt_txt: '2022-08-30 18:00:00',
    main: {
      temp_max: 294.94,
      temp_min: 292.84
    },
    weather: [
      {
        main: 'Rain'
      }
    ]
  }
]

const Item = (props) => {
  const { dt_txt, min, max, condition } = props
  return (
    <View style={styles.item}>
      <FeatherIcon name={'sun'} size={30} color={'white'} />
      <Text style={styles.date}>{dt_txt}</Text>
      <Text style={styles.temp}>{min}</Text>
      <Text style={styles.temp}>{max}</Text>
    </View>
  )
}

const UpcomingWeather = () => {
  const renderItem = ({ item }) => (
    <Item
      condition={item.weather[0].main}
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  )
  return (
    <SafeAreaView style={styles.container}>
      <Text>Upcoming weather works</Text>
      <FlatList data={DATA} renderItem={renderItem} keyExtractor={(item)=>item.dt_txt} />
    </SafeAreaView>
  )
}

export default UpcomingWeather

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: StatusBar.currentHeight || 0,
    backgroundColor:'#E6FFFD'
  },
  item:{
    padding:20,
    marginVertical:8,
    marginHorizontal:16,
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
    borderRadius:25,
    backgroundColor:'#FF90BB',
    // borderWidth:0,
  },
  temp:{

  color:'white',
  fontSize:15
  },
  date:
  {
    color:'white',
    fontSize:15
  }
})
