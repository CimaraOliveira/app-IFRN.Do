import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View,TextInput, TouchableOpacity } from 'react-native';
import api from '../services/api';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { MyInput } from '../components/MyInput';
import GlobalStyles from '../styles/GlobalStyles';
import Theme from '../styles/Theme';
import Icon3 from 'react-native-vector-icons/AntDesign';
import Tarefas from '../components/Tarefas';

export function Details({placeholder,onPress,onChangeText}) {
    return (
    <View style={ styles.container}>

        <View style={styles.container1}>
            <Text style={styles.title}>IFRN.DO</Text>
            <Text style={styles.subtitle}>Você tem hhh tarefas</Text>
            
        </View>
        <View style={styles.input} >
        <MyInput placeholder="Adicionar uma tarefa"  />
        </View>     

        <View >
            {/* <Tarefas  desc="Tarefas"  /> */}
        </View>
        
      </View>
    );

}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor:'#DCDCDC', 
    
    },
    bacground:{
        flex: 3,
        backgroundColor: '#1DB863'
        
    },
    title:{
       fontSize:25,
       color:'#FFFF',
       left:-50,
       top:30,
    },
    subtitle:{
      fontSize:15,
      color:'#FFFF',
      left:10,
      top:35,
    },
   
    container1:{
        width:360,
        height:120,
        top:0,
        flexDirection: 'row',
        backgroundColor:'#1DB863',
        justifyContent:'center'
      },
   input:{
    width: 300,
    height: 50,
    top: -10,
    borderRadius: 5,
    margin: 29,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    top:-55,
      
      
    },
    button:{
      padding: 15,
      backgroundColor: '#FFFFFF',
      borderLeftWidth:1,
     }
});
