import React from 'react';
import { StyleSheet, Text, View, Platform, TextInput, KeyboardAvoidingView } from 'react-native';


export default class App extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
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
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  largText: {
    fontSize: 44,
  },
  smallText: {
    fontSize: 18,
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
    borderRadius: 5,
    color: '#fff',
    elevation: 5 
  },
});


/* 
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style>San Francisco</Text>
        <Text>Clear</Text>
        <Text>15°</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

*/