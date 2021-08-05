import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import ButtonCheck from '../components/ButtonCheck';

export default function Tarefas(props) {
  /* const doneOrNotStyle = props.checked != null ?
  {textDecoration: 'line-through'} : {} */

  return (
    <View style={props.checked ? styles.concluida : styles.container} >
      <View style={styles.checkboxContainer}>
        <ButtonCheck onPress={props.onChecked} isChecked={props.checked} />
      </View>
      <View>
        <Text style={props.checked ? styles.checkedConcluido : styles.textTarefa}
        >{props.tarefa}</Text>
      </View>
      <TouchableOpacity onPress={props.apagar}>
        <FontAwesome5 name="trash-alt" size={28} color="black" />
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 360,
    height: 65,
    top: 10,
    padding: 10,
    left: 4,
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F4F4F4',
    borderWidth: 1,
    borderColor: '#B6B4B4',
    margin: -1,
    flex: 1,


  },
  concluida: {
    width: 360,
    height: 65,
    top: 10,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#D3D3D3',
    borderWidth: 1,
    borderColor: '#B6B4B4',
    margin: -1,
    flex: 1,
  },
  textTarefa: {
    fontSize: 18,
    color: '#808080'
  },
  IconStyle: {
    left: 10,
    fontSize: 30,
    color: '#808080',
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
    top: 10,
    color: '#1DB863',
  },
  checkbox: {
    alignSelf: "center",
    color: '#1DB863',

  },
  checkedConcluido: {
    color: '#1DB863',
    fontSize: 19,
    fontWeight: 'bold',
  },

  desc: {
    color: '#000',
    fontSize: 10,

  }



})

