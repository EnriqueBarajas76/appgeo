import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { Button, StyleSheet, Text, TextInputBase, View } from 'react-native';
import * as Location from 'expo-location';
import Constants from 'expo-constants';

export default function App() {
  const [puntos,setPuntos] = useState([])
  const [nombre, setNombre] = useState('')
  const [puntoTmp, setPuntoTmp] =useState ({})
  const [ver, setVer] = useState(false)
  const [esNuevo, setEsNuevo] = useState('nuevo')
  const [verPuntos, setVerPuntos] = useState(true)

  const mostrarPuntos = () => setVerPuntos(!verPuntos)
  
  const buscarLocation = async () => {
    const {status} = await Location.requestForegroundPermissionsAsync()
    if (status !== 'granted'){
      return Alert.alert('No tenemos permiso para la geolacalización')
    }
    const location = await location.getCurrentPossitionAsync({})
    console.log(location)
  }
  useEffect(() => {
    buscarLocation() 
  })

  const

  const manejaLista =()=>{
    setEsNuevo('Todos')
    setVer(True) 
  }

return (
  <View style={styles.container}>
    <Mapa 
      longPress = {longPress} 
      puntos = {puntos}
      verPuntos = {verPuntos}
    />
    <Panel
    pressLeft={manejaLista}
    mostrarPuntos = {mostrarPuntos}
     />
    <Modals ver={ver}>
      {
        esNuevo === 'nuevo' ?
        <>
        <TextInput
          label='Nombre: '
          placeholder = 'Escribir el nombre'
          onChangeText = {chnText}
        />
        <Button
          title = 'Guardar'
          onPress = {guardar}
          
      }
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
},
map: {
  width: 
});
