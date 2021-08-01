import React , { useState} from 'react';
import { StatusBar } from 'react-native';
import { StyleSheet, Text, View, ImageBackground, Alert} from 'react-native';
import { Routes } from './src/routes';
//import { MyButton } from '../components/MyButton';
import IF from '../../assets/imgs/IF.png';
import { Input } from '../components/Input';
import { MyButton } from '../components/MyButton';
import api from '../services/api';


export function Home({ navigation , route }) {
  
  const [matricula,setMatricula]= useState("");
  const [password,setPassword]= useState("");

  /* função para realizar chamada ao suap */
  async function handleLogin(){
      /* pegando variáveis pra realizar login */
    var params = new URLSearchParams();
    params.append('username', matricula);
    params.append('password', password);
    try{
     /* requisitando m token */
      const response = await api.post('autenticacao/token/', params);
      const { token } = response.data;  /*retornado uma resposta  pegando token */

    /*  console.log(response.data)  *//* retornando um token */
    
      /* pegando  informações do usuario  no cabeçalho*/
      const responseUser = await api.get('/minhas-informacoes/meus-dados/', {
         headers:{
           'authorization':'jwt' + token,
           'Accept':'application/json',
           'Content-Type': 'application/json'
         }
      });
      /* retornando os dados  */
      console.log(responseUser.data);
    }catch{
      //Alert.alert("Erro na autenticação!");
    }
    navigation.navigate('Details');
     
  }

    return (

        <View style={styles.container}>
            <View style={styles.logo}>
                <ImageBackground source={IF} style={styles.background} />
                <Text style={styles.title}>IFRN.DO</Text>
            </View>
           
            <View style={styles.input}>
                <Input placeholder="Matrícula" keyboardType='numeric'  onChangeText={x=> setMatricula(x)}/>
                <Input placeholder="Senha"  secureTextEntry={true} onChangeText={x => setPassword(x)}/>   
            
            </View>

            <View>                               
                    <MyButton onPress={handleLogin} /> 
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
        width: 150,
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
        margin: -120,
        alignItems: 'center',
        left:-22,
    },
    input: {
        height: 100,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },

});
