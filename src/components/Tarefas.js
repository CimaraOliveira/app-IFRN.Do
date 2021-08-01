import React from 'react';
import { StyleSheet, View, Text , TouchableOpacity} from 'react-native';
import Icon3 from 'react-native-vector-icons/AntDesign';

/* export default props =>{
    const doneOrNotStyle = props.doneAt != null ?
       {textDecoration: 'line-through'} : {}

    return (
        <View style={styles.container}>
        <View style={styles.checkContainer}>
            {getChechView(props.doneAt)}
        </View>

        <View>
            <Text style={[styles.desc, doneOrNotStyle]} >{props.nome}</Text> */
            {/*  <Text> {props.estimateAt + ""} </Text>  */}
     /*    </View>   
        </View>
    )
}

function getChechView(doneAt){
    if(doneAt !- null){
        return(
            <View style={styles.concluida} >
                <Icon3 name='check' size={20} color='#FFF'></Icon3>
            </View>
        )

    }else{
        return(
            <View style={styles.pendente} ></View>
        )
    }
  
}

const styles = StyleSheet.create({
    container:{
      flexDirection:'row',
      borderBottomWidth:1,
      alignItems:'center',
      paddingVertical:10,    
    },

    checkContainer:{
        width:"20%",
        alignItems:'center',
        justifyContent:'center'
    },
    pendente:{
        height:25,
        width:25,
        borderRadius:13,
        borderWidth:1,
        borderColor:'#555'
    },
    concluida:{
        height:25,
        width:25,
        borderRadius:13,
        borderColor:'#4D7',
        alignItems:'center',
        justifyContent:'center',
    },

    desc:{
        color:'#000',
        fontSize:10,

    }

})

 */