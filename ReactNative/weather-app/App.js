import React from 'react';
import { StyleSheet, Text, View, Platform, TextInput, KeyboardAvoidingView, ImageBackground  } from 'react-native';
import SearchInput from './src/componets/SearchInput'
import  bgImage from './assets/bg/clear.png'
export default class App extends React.Component {
  state = { 
    text: '',
    location: ''
  }
  
  _handleChangeText = (text) => { this.setState({ text })
  }

  _handleSubmit = () => {
    const { text } = this.state

    if ( !text ){
      return
    }else {
      this.setState({ location: text })
      this.setState({ text: '' })
      console.log(text)
    }
  }

  render() {
    const { location } = this.state
    return (   
      <KeyboardAvoidingView  style={styles.container} behavior="padding">
       <ImageBackground source={bgImage} style={styles.background}>
        <Text style={styles.largText}>{location}</Text>
        <Text style={styles.smallText}>Clear</Text>
        <Text style={styles.largText}>15°</Text>
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



