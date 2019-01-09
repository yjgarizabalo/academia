import React from 'react';
import { StyleSheet, Text, View, Platform, TextInput, KeyboardAvoidingView, ImageBackground, ActivityIndicator } from 'react-native';
import SearchInput from './src/componets/SearchInput'
import  bgImage from './assets/bg/clear.png'
import  { fecthLocationId, fecthWeatherById } from './src/api'

export default class App extends React.Component {
  state = { 
    text: '',
    city: '',
    weather: '',
    temperature: '',
    isLoanding: false
    
  }

  componentDidMount () {
    this._searchWeather("Toronto")
  }
  
  _handleChangeText = (text) => this.setState({ text })

  _handleSubmit = () => {
    const { text } = this.state
    if ( !text )
      return
      this._searchWeather(text)
      this.setState({ text: '' })
    }

    _searchWeather = async (location) => {

      this.setState({isLoanding: true})

      const locationData = await fecthLocationId( location )
      const woeid = locationData[0].woeid
      
      const  weatherData = await fecthWeatherById( woeid )
      const { weather, temperature, city} = weatherData
      this.setState({weather, temperature, city, isLoanding: false})
    }

  render() {
    const { city, weather, temperature, isLoanding } = this.state
    return (   
      <KeyboardAvoidingView  style={styles.container} behavior="padding">
       <ImageBackground source={bgImage} style={styles.background}>
        {
          isLoanding
          ? <ActivityIndicator size ="large"/>
          : <React.Fragment>
          <Text style={styles.smallText}>Ciudad</Text>
          <Text style={styles.largText}>{city}</Text>
          <Text style={styles.smallText}>{weather}</Text>
          <Text style={styles.largText}>{Math.round(temperature)}°</Text>
          <SearchInput placeholder='Buscar Ciudad'
           handleChangeText={ this._handleChangeText }
           value= { this.state.text }
           onSubmit= { this._handleSubmit }
        />
          </React.Fragment>
        }
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