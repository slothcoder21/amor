import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { auth, firebase } from '../../config/firebase.js';


export default function UploadImage() {
  const [image, setImage] = useState(null);

  useEffect(() => {
    getCameraRollPermission();
  }, []);

  const getCameraRollPermission = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission required', 'Please grant camera roll access to upload images.');
    }
  };

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      const source = { uri: result.assets[0].uri };
      console.log('Photo picked', source);
      setImage(source);
    }
  };

  const uploadImage = async (uri) => {
    const response = await fetch(uri);
    const blob = await response.blob();
    const filename = uri.substring(uri.lastIndexOf('/') + 1);
    const ref = firebase.storage().ref().child(filename);

    try {
      await ref.put(blob);
      Alert.alert('Profile Picture Set');
      setImage(null);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles.container}>
      {image && <Image source={{ uri: image.uri }} style={[styles.image, styles.uploadedImage]} />}
      <View style={styles.uploadBtnContainer}>
        <TouchableOpacity onPress={pickImage} style={styles.uploadBtn}>
          <Text style={{ color: 'white' }}>{image ? 'Edit' : 'Upload'} Image</Text>
          <AntDesign name="camera" size={20} color="white" />
        </TouchableOpacity>
      </View>
      {image && (
        <TouchableOpacity onPress={() => uploadImage(image.uri)} style={styles.uploadBtn}>
          <Text style={{ color: 'white' }}>Upload to Firebase</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    elevation: 2,
    height: 200,
    width: 200,
    backgroundColor: '#efefef',
    position: 'relative',
    borderRadius: 999,
    overflow: 'hidden',
    marginVertical: 90
  },
  uploadedImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 1 
  },
  uploadBtnContainer: {
    opacity: 0.7,
    position: 'absolute',
    right: 0,
    bottom: 0,
    backgroundColor: '#9FA54B',
    width: '100%',
    height: '25%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  uploadBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#9FA54B',
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
