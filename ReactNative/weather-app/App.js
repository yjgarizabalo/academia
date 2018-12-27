import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.largText}>San Francisco</Text>
        <Text style={styles.smallText}>Clear</Text>
        <Text style={styles.smallText}>15°</Text>
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
  largText: {
    fontSize: 44,
  },
  smallText: {
    fontSize: 18,
  },
  textStyle: {
    fontFamily: Platform.OS === 'ios' ?  'AvenirNext-Regular' : 'Roboto'
  }
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