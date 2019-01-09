import React from 'react';
import { StyleSheet, Text, View, Platform, TextInput, KeyboardAvoidingView, ImageBackground  } from 'react-native';
import SearchInput from './src/componets/SearchInput'
import  bgImage from './assets/bg/clear.png'
import  { fecthLocationId, fecthWeatherById } from './src/api'

export default class App extends React.Component {
  state = { 
    text: '',
    location: '',
    weather: '',
    temperature: ''
  }
  
  _handleChangeText = (text) => { this.setState({ text })
  }

  _handleSubmit = async () => {
    const { text } = this.state

    if ( !text ){
      return
    }else {
      this.setState({ location: text })
      this.setState({ text: '' })

      const locationData = await fecthLocationId( text )
      console.log(locationData)
      const woeid = locationData[0].woeid
      const  weatherData = await fecthWeatherById( woeid )
      const { weather, temperature} = weatherData
      this.setState({weather, temperature})
    }
  }

  render() {
    const { location, weather, temperature,  } = this.state
    return (   
      <KeyboardAvoidingView  style={styles.container} behavior="padding">
       <ImageBackground source={bgImage} style={styles.background}>
        <Text style={styles.smallText}>Ciudad</Text>
        <Text style={styles.largText}>{location}</Text>
        <Text style={styles.smallText}>{weather}</Text>
        <Text style={styles.largText}>{temperature}°</Text>
        <SearchInput placeholder='Buscar Ciudad'
        handleChangeText={ this._handleChangeText }
        value= { this.state.text }
        onSubmit= { this._handleSubmit }
        />
        </ImageBackground>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  largText: {
    fontSize: 44,
    color: '#000'
  },
  smallText: {
    fontSize: 18,
    color: '#000'
  },
  textStyle: {
    fontFamily: Platform.OS === 'ios' ?  'AvenirNext-Regular' : 'Roboto'
  },

});