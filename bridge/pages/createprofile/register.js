import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import UploadImage from './profilePhoto';
import { TextInput } from 'react-native-gesture-handler';

export default function register({navigation}) {
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
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Home')}
            >
                <Text style={styles.buttonText}> continue </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#C9D09A'
    },

    input: {
        width: '100%',
        marginVertical: 10,
        padding: 15,
        borderWidth: 1,
        borderColor: '#9FA54B',
        borderRadius: 25,
        backgroundColor: '#FFFFFF',
    },
    button: {
        backgroundColor: '#FFFFFF',
        padding: 10,
        marginVertical: 10,
        borderRadius: 25,
        width: '50%',
        height: 45,
        justifyContent: 'center',
        alignItems: 'center', 
      },
      buttonText: {
        fontSize: 20,
        color: '#9FA54B'
      }
});