import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState} from 'react';
import { Button, Camera, Dimensions, StyleSheet, Text, View } from 'react-native';

import { Camera } from 'expo-camera';

export default function App() {

    const [permisos, setPermisos] = useState(null)
    const [tipo, setTipo] = useState[Camera.Constants.Type.back]

    const getPermisos = async () => {
        const { status } = await Camera.requestMicrophonePermissionsAsync()
        setPermisos(status === 'granted')
        console.log(status)
    }

    useEffect (() => {
        getPermisos()
    },[])

    if (permisos === null){
        return (
            <View style={styles.container}>
                <Text>No se ha otorgado el permiso</Text>
                <StatusBar style="auto" />   
            </View>
        )
    }

    if (permisos === false){
        return (
            <View style={styles.container}>
                <Text>No tienes permiso para usar la camara</Text>
                <StatusBar style="auto" />   
            </View>
        )
    }

return (
    <View style={styles.container}>
        <Camera style={styles.camara} type={tipo} >
        <Button
            title="Girar"
            onPress = {() => {
                const { front, back } = Camera.Constants.Type
                const nTipo = tipo === back ? front : back
                setTipo(nTipo)
            }}
        />
        </Camera>
        <StatusBar style="auto" />   
    </View>              
)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: '',
    },

camara: {
    flex: 1,
    height: Dimensions.get('window').height-10,
    width: Dimensions.get('window').width,
    padding: 20,
}
});