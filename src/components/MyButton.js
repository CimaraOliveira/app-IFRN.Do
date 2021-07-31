import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export function MyButton(props) {

  return (

    <TouchableOpacity style={styles.button} activeOpacity={0.6} onPress={props.onPress}>
      <Text style={styles.text}>Entrar</Text>
    </TouchableOpacity>

  )
};

const styles = StyleSheet.create({

  button: {
    width: 300,
    height: 50,
    top: -10,
    borderRadius: 15,
    backgroundColor: '#808080',
    margin: 29,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,

  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 8,
    textAlign: 'center',
    color: '#FFFFFF'
  }

});