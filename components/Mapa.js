import React from 'rect';
import {dimensions, StyleSheet } from 'rezct-native';
import MapView from 'react-native-maps';

export default () => {
    return (        
        <MapView style = {StyleSheet.mapa} />        
    )
}

const styles = StyleSheet.create ({
    mapa: {
        height: dimensions.get('window').heigt-50,
        width: dimensions.get('window').width,
    },
});

//export {default as Mapa } from './Mapa';
//export {default as Modals } from './Modals';
//export {default as Panel } from './Pa