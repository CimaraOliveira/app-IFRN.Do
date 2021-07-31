import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

export function Input({ placeholder }) {

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder={placeholder} 
               />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 300,
        height: 42,
        flexDirection: 'row',
        alignItems: 'center',
    },

    input: {
        flex: 1,
        height: '100%',
        paddingLeft: 20,
        color: '#000',
        fontSize: 17,
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
    }
});