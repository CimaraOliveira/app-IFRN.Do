import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export function MyButton(props) {

  return (
    <View >
    <View>
    <Text >{props.user}</Text>
     </View>
    <TouchableOpacity style={styles.button} activeOpacity={0.6} onPress={props.onPress}>
      <Text style={styles.text}>Entrar</Text>
    </TouchableOpacity>
    </View>

  )
};

const styles = StyleSheet.create({

  button: {
    width: 320,
    height: 50,
    top: 50,
    borderRadius: 5,
    backgroundColor: '#808080',
    margin: 29,
    justifyContent: 'center',
    alignItems: 'center',
    
    

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