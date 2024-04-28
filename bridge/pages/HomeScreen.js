import React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, Button } from 'react-native';

function HomeScreen() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Text>Welcome to the Home Page!</Text>
      <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.button}>
      <View style={styles.circle}>
        <Text style={styles.text}>+</Text>
      </View>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={styles.modal}>
          <Text>This is a modal!</Text>
          <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.button}>
            <View style={styles.circle2}>
              <Text style={styles.text2}>X</Text>
            </View>
          </TouchableOpacity>
        </View>
      </Modal>
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
    top: 30,
    right: 20,
    zIndex: 999,
  },
  circle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#FFFFFF',
  },
  text: {
    fontSize: 30,
    color: '#9FA54B',
  },
  modal: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle2: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#9FA54B',
  },
  text2: {
    fontSize: 30,
    color: '#FFFFFF',
  }
});

export default HomeScreen;
