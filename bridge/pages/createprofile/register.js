import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import UploadImage from './profilePhoto';
import { TextInput } from 'react-native-gesture-handler';

export default function register() {
    return(
        <View style={styles.container}>
            <UploadImage/>
            <TextInput
                style={styles.input}
                placeholder="first name"
            />
            <TextInput
                style={styles.input}
                placeholder= "last name"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 50,
        backgroundColor: '#9FA54B',
        alignItems: 'center',
        justifyContent: 'center',
    },

    input: {
        width: '100%',
        marginVertical: 10,
        padding: 15,
        borderWidth: 1,
        borderColor: '#9FA54B',
        borderRadius: 25,
        backgroundColor: '#FFFFFF',
    }
});