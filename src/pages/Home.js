import React from 'react';
import { StatusBar } from 'react-native';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { Routes } from './src/routes';
//import { MyButton } from '../components/MyButton';
import ifrn from '../../assets/imgs/ifrn.png';
import { Input } from '../components/Input';
import { MyButton } from '../components/MyButton';


export function Home({ navigation }) {

    return (

        <View style={styles.container}>

            <View style={styles.logo}>
                <ImageBackground source={ifrn} style={styles.background} />
                <Text style={styles.title}>IFRN DO</Text>
            </View>
           
            <View style={styles.input}>
                <Input placeholder="Matrícula" />
                <Input placeholder="Senha"  secureTextEntry={false} />   
            </View>

            <View>                               
                    <MyButton  title="Details" onPress={() => navigation.navigate('Details')} /> 
            </View>

        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1DB863'
    },

    background: {
        height: 100,
        width: 88,
        alignItems: 'center',
        padding: 100,

    },
    logo: {
        height: 300,
        width: '120%',
        alignItems: 'center',
        padding: 80
    },
    title: {
        padding: 50,
        fontSize: 30,
        color: '#FFFFFF',
        right: 40,
        width: '85%',
        height: 500,
        margin: -120
    },
    input: {
        height: 100,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },

});
