'use strict'

import React from 'react'
import {TextInput, StyleSheet} from 'react-native'
import PropsTypes from 'prop-types'

function SearchInput({placeholder, handleChangeText, value, onSubmit}) {
    return( 
        <TextInput style={styles.TextInput}
         autoCorrect={false}
         autoFocus
         clearButtonMode="while-editing"
         keyboardAppearance="dark"
         returnKeyType="search"
         placeholder={placeholder}
         onChangeText={ handleChangeText }
         value={ value }
         onSubmitEditing= { onSubmit }
         />
     )
}


const styles = StyleSheet.create({
    TextInput: {
        backgroundColor: 'gray',
        width: 300,
        height: 50,
        marginTop: 40,
        paddingHorizontal: 10,
        borderRadius: 30,
        color: '#fff',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1},
        shadowOpacity: 0.8,
        shadowRadius: 1,
      },
});

SearchInput.PropsTypes = {
    placeholder: PropsTypes.string.isRequired
}

export default SearchInput
