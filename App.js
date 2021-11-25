import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import * as Location from 'expo-location';
import Constants from 'expo-constants';

export default function App() {
  const buscarlocation = async () => {
    const {status} =await Location.requestForegroundPermissionsAsync()
    if (status !== 'granted'){
      return Alert.alert ('No tenemos permiso para la geolacalización')
    }
    const location = await location.getCurrentPossitionAsync({})
    console.log(location)
  }
  useEffect(() => {
    buscarlocation() 
  })

return (
  <View style={styles.container}>
    <Text> Coordenadas </Text>
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
    padding: 20
  },
});
