import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Keyboard, FlatList } from 'react-native';
import api from '../services/api';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { MyInput } from '../components/MyInput';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Tarefas from '../components/Tarefas';

export function Details() {
  const keyAsyncStorage = "@ifrn:tarefas";


  const [tarefa, setTarefa] = useState('');
  const [tarefas, setTarefas] = useState([]);
  const [count, setCount] = useState(0);
  const [check, setCheck] = useState(false)


  async function clear() {
    await AsyncStorage.clear();
  }

  async function handlesaveTask() {
    const data = {
      id: String(new Date().getTime()),
      tarefa: tarefa,
      checked: false
    }
    const vetData = [...tarefas, data]
    try {
      await AsyncStorage.setItem(keyAsyncStorage, JSON.stringify(vetData));
    } catch (error) {
      Alert.alert("Erro ao salvar tarefa");
    }

    Keyboard.dismiss();
    setTarefa(' ');
    loadData();   /*carega dados validos para tela */

  }

  async function setChecked(index) {
    let item = tarefas[index];
    item = {
      ...item,
      checked: !item.checked
    }
    tarefas[index] = item
    console.log('item', item)
    await AsyncStorage.setItem(keyAsyncStorage, JSON.stringify(tarefas));
    await loadData()
  }

  async function loadData() {
    try {
      const retorno = await AsyncStorage.getItem(keyAsyncStorage);
      const dadosTarefas = await JSON.parse(retorno)
      setTarefas(dadosTarefas || []);
    } catch (error) {
      Alert.alert("Erro na leitura!");
    }
  }

  async function handledelete(id) {
    const newData = tarefas.filter(item => item.id != id);
    await AsyncStorage.setItem(keyAsyncStorage, JSON.stringify(newData));
    await loadData()
  }

  useEffect(() => {
    loadData();
  }, []);


  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Text style={styles.title}>IFRN.DO</Text>
        <Text style={styles.subtitle}>Você tem {tarefas.length} tarefas  </Text>

      </View>
      <View style={styles.input} >
        <MyInput placeholder="Adicionar uma tarefa"
          value={tarefa}
          onChangeText={(e) => setTarefa(e)} onPress={handlesaveTask} />
      </View>
      <View style={styles.list}>
        <FlatList data={tarefas}
          keyExtractor={item => item.id}
          renderItem={({ item, index }) => (
            <Tarefas status={item.status} tarefa={item.tarefa} onChecked={() => setChecked(index)} checked={item.checked} apagar={() => handledelete(item.id)} />

          )}
        />
      </View>
    </View>


  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DCDCDC',

  },
  bacground: {
    flex: 3,
    backgroundColor: '#1DB863'

  },
  title: {
    fontSize: 25,
    color: '#FFFF',
    left: -50,
    top: 30,
  },
  subtitle: {
    fontSize: 15,
    color: '#FFFF',
    left: 10,
    top: 35,
  },

  container1: {
    width: 360,
    height: 120,
    top: 0,
    flexDirection: 'row',
    backgroundColor: '#1DB863',
    justifyContent: 'center'
  },
  input: {
    width: 300,
    height: 50,
    top: -10,
    borderRadius: 5,
    margin: 29,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    top: -55,


  },
  button: {
    padding: 15,
    backgroundColor: '#FFFFFF',
    borderLeftWidth: 1,
  },
  desc: {
    color: '#000',
    fontSize: 15,
  },
});
