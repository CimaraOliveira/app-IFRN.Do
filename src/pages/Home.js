import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Alert } from 'react-native';
import { Routes } from './src/routes';
import { Input } from '../components/Input';
import { MyButton } from '../components/MyButton';
import api from '../services/api';

export function Home({ navigation }) {


    const [matricula, setMatricula] = useState("");
    const [password, setPassword] = useState("");



    /* função para realizar chamada ao suap */
    async function handleLogin() {
        /* pegando variáveis pra realizar login */
        var params = new URLSearchParams();
        params.append('username', matricula);
        params.append('password', password);
        try {
            /* requisitando m token */
            const response = await api.post('autenticacao/token/', params);
            console.log(response.data); /* retornando um token */
            const { token } = response.data;   /*retornado uma resposta  pegando token */
            console.log(token);
            /* pegando  informações do usuario  no cabeçalho*/
            const responseUser = await api.get('/minhas-informacoes/meus-dados/', {
                headers: {
                    'authorization': 'jwt ' + token,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });

            const { data } = responseUser
            console.log(data);
            navigation.navigate('Details', { login: data });

        } catch {
            Alert.alert("Erro na autenticação!");
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.imagem}>
                <Image
                    source={require('../../assets/imgs/IF.png')}
                    style={styles.logo}
                />
                <Text style={styles.title}>IFRN.DO</Text>
            </View>

            <View style={styles.input}>
                <Input placeholder="Matrícula" keyboardType='numeric' onChangeText={x => setMatricula(x)} />
                <Input placeholder="Senha" secureTextEntry={true} onChangeText={x => setPassword(x)} />
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
        width: "40%",
        alignItems: 'center'
    },
    imagem: {
        height: 350,
        width: '100%',
        alignItems: 'center',

    },
    title: {
        fontSize: 35,
        color: '#FFFFFF',
        width: '85%',
        height: 500,
        margin: -30,
        alignItems: 'center',
        left: 80,
        justifyContent: 'center'
    },
    input: {
        height: 100,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },

});
