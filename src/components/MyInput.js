import React from 'react';
import { StyleSheet, View, TextInput , TouchableOpacity} from 'react-native';
import Icon3 from 'react-native-vector-icons/AntDesign';
import GlobalStyles from '../styles/GlobalStyles';
import Theme from '../styles/Theme';

export function MyInput({placeholder,onPress,onChangeText} ) {

    return (
      
        <View style={ styles.container}>
        <TextInput style={styles.inputText} placeholder={placeholder}
          placeholderTextColor={Theme.colors.gray2}
          onChangeText={onChangeText}
        />
        <TouchableOpacity style={styles.button} onPress={onPress}>
           <Icon3 name="right" size={20} color={Theme.colors.gray2}/>
        </TouchableOpacity>
      </View>
    )
}

const styles = StyleSheet.create({
  container:{
        width: 320,
        height: 48,
        flexDirection: 'row',
        alignItems: 'center',
    },
    inputText:{
      flex: 1,
      height: '100%',
      backgroundColor: '#FFFFFF',
      paddingLeft: 20,
      color: Theme.colors.gray,
      fontSize: 17,
      
    },
    button:{
      padding: 15,
      backgroundColor: '#FFFFFF',    
     }
});