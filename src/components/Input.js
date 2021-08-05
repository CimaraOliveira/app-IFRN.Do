import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

export function Input({ placeholder, onChangeText }) {

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                onChangeText={onChangeText}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 95,
        width: 320,
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',

    },
    input: {
        flex: 1,
        height: '100%',
        color: '#000',
        fontSize: 17,
        paddingLeft: 20,
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
    }
});