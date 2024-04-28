import React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, Button, TextInput, Keyboard, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

function HomeScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [image, setImage] = useState(null);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addMessage = (message) => {
    setMessages([...messages, message]);
  };

  const renderMessages = () => {
    return messages.map((message, index) => (
      <View key={index} style={styles.messageBubble}>
        <Text style={styles.text3}>{message}</Text>
      </View>
    ));
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.uri);
    }
  };

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
          <TextInput
              style={styles.input}
              value={inputValue}
              onChangeText={setInputValue}
              placeholder="type a message!"
              placeholderTextColor="#707070"
              color= '#9FA54B'
              multiline={true}
              textAlignVertical="top"
              returnKeyType="done"
              onKeyPress={({ nativeEvent }) => {
                if (nativeEvent.key === 'Enter') {
                  Keyboard.dismiss();
                }
              }}
            />
            <TouchableOpacity onPress={pickImage} style={styles.selectImage}>
              <Text style={styles.selectImageText}>select image</Text>
            </TouchableOpacity>
            {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
            <TouchableOpacity 
              onPress={() => {
                addMessage(inputValue);
                setModalVisible(false);
                setInputValue('');
              }} 
              style={styles.submitbutton}>
              <Text style={styles.submitbuttonText}>submit</Text>
            </TouchableOpacity>
        </View>
      </Modal>
      <ScrollView style={{ flex: 1, width: '100%' }} contentContainerStyle={{ alignItems: 'center' }}>
        {renderMessages()}
      </ScrollView>
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
  },
  input: {
    width: '80%',
    marginVertical: 10,
    padding: 20,
    paddingTop: 20,
    height: 500,
    borderWidth: 1,
    borderColor: '#9FA54B',
    borderRadius: 25,
    backgroundColor: '#FFFFFF',
    fontSize: 25,
  },
  selectImage: {
    bottom: -20,
    left: -110,
  },
  selectImageText: {
    fontSize: 15
  },
  submitbutton: {
    bottom: -40,
    right: -110,
    backgroundColor: '#9FA54B',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  submitbuttonText: {
    color: '#FFFFFF',
    fontSize: 20,
  },
  messageBubble: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 5,
    marginVertical: 5,
    width: '80%',
  },
  text3: {
    fontSize: 15,
    color: '#9FA54B',
  }
});

export default HomeScreen;
