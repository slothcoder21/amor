import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, Button, TextInput, Keyboard, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { getDatabase, ref, push } from 'firebase/database';
function HomeScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [image, setImage] = useState(null);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const database = getDatabase(); // Initialize Firebase database

  useEffect(() => {
    // Set up listener to fetch messages from Firebase
    const messagesRef = ref(database, 'messages');
    const fetchMessages = async () => {
      const snapshot = await get(ref(messagesRef));
      const messagesData = snapshot.val();
      if (messagesData) {
        setMessages(Object.values(messagesData));
      }
    };
    fetchMessages();
  }, []);

  const addMessage = async (message) => {
    // Add message to Firebase database
    const newMessageRef = push(ref(database, 'messages'));
    await set(newMessageRef, message);

    // Update local state
    setMessages([...messages, message]);
  };

  // Function to render messages
  const renderMessages = () => {
    return messages.map((message, index) => (
      <View key={index} style={styles.messageBubble}>
        <Text>{message}</Text>
      </View>
    ));
  };

  // Function to pick image from gallery
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
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
            color='#9FA54B'
            multiline={true}
            textAlignVertical="top"
            returnKeyType="done"
            onSubmitEditing={() => {
              addMessage(inputValue);
              setModalVisible(false);
              setInputValue('');
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
    padding: 10,
    marginVertical: 5,
    maxWidth: '80%',
  },
});

export default HomeScreen;




// import React from 'react';
// import { useState } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, Modal, Button, TextInput } from 'react-native';

// function HomeScreen() {
//   const [modalVisible, setModalVisible] = useState(false);

//   return (
//     <View style={styles.container}>
//       <Text>Welcome to the Home Page!</Text>
//       <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.button}>
//       <View style={styles.circle}>
//         <Text style={styles.text}>+</Text>
//       </View>
//       </TouchableOpacity>

//       <Modal visible={modalVisible} animationType="slide" transparent>
//         <View style={styles.modal}>
//           <Text>This is a modal!</Text>
//           <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.button}>
//             <View style={styles.circle2}>
//               <Text style={styles.text2}>X</Text>
//             </View>
//           </TouchableOpacity>
//           <TextInput
//               style={styles.input}
//               placeholder="type a message!"
//               placeholderTextColor="#707070"
//               returnKeyType="done"
//               color= '#9FA54B'
//             />
//         </View>
//       </Modal>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: '#BBBD74',
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   button: {
//     position: 'absolute',
//     top: 30,
//     right: 20,
//     zIndex: 999,
//   },
//   circle: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: 60,
//     height: 60,
//     borderRadius: 30,
//     backgroundColor: '#FFFFFF',
//   },
//   text: {
//     fontSize: 30,
//     color: '#9FA54B',
//   },
//   modal: {
//     backgroundColor: '#FFFFFF',
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   circle2: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: 60,
//     height: 60,
//     borderRadius: 30,
//     backgroundColor: '#9FA54B',
//   },
//   text2: {
//     fontSize: 30,
//     color: '#FFFFFF',
//   },
//   input: {
//     width: '80%',
//     marginVertical: 10,
//     padding: 15,
//     borderWidth: 1,
//     borderColor: '#9FA54B',
//     borderRadius: 25,
//     backgroundColor: '#FFFFFF'
//   },
// });

// export default HomeScreen;
