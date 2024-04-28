import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Welcome to the Home Page!</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#BBBD74',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: '#9FA54B',
    borderRadius: 50,
    padding: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 30,
  },
});

export default HomeScreen;
