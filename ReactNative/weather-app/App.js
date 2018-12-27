import React from 'react';
import { StyleSheet, Text, View, Platform, TextInput, KeyboardAvoidingView, ImageBackground  } from 'react-native';
import  bgImage from './assets/img/light-rain.png';


export default class App extends React.Component {
  render() {
    return (
      <ImageBackground source={bgImage} style={{width: '100%', height: '100%'}}>
      <KeyboardAvoidingView   style={styles.container} behavior="padding">
        <Text style={styles.largText}>San Francisco</Text>
        <Text style={styles.smallText}>Clear</Text>
        <Text style={styles.smallText}>15°</Text>
        <TextInput style={styles.TextInput}
         autoCorrect={false}
         autoFocus
         clearButtonMode="while-editing"
         keyboardAppearance="dark"
         returnKeyType="search"
         placeholder="Buscar Ciudad"/>
      </KeyboardAvoidingView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  largText: {
    fontSize: 44,
    color: '#fff'
  },
  smallText: {
    fontSize: 18,
    color: '#fff'
  },
  textStyle: {
    fontFamily: Platform.OS === 'ios' ?  'AvenirNext-Regular' : 'Roboto'
  },
  TextInput: {
    backgroundColor: 'grey',
    width: 300,
    height: 50,
    marginTop: 40,
    paddingHorizontal: 10,
    borderRadius: 30,
    color: '#fff',
    elevation: 5 
  },
});



