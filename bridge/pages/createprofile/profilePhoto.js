import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { auth } from '../../config/firebase.js';

export default function UploadImage() {
  const [image, setImage] = useState(null);

  useEffect(() => {
    getCameraRollPermission();
  }, []);

  const getCameraRollPermission = async () => {
    const { status } = await ImagePicker.getMediaLibraryPermissionsAsync();
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
      setImage(result.uri);
      uploadImage(result.uri);
    }
  };

  const uploadImage = async (uri) => {
    const response = await fetch(uri);
    const blob = await response.blob();

    const filename = uri.substring(uri.lastIndexOf('/') + 1);
    const storageRef = auth.storage().ref().child('profile_photos/' + filename);

    try {
      await storageRef.put(blob);
      console.log('Image uploaded successfully.');
    } catch (error) {
      console.error('Error uploading image: ', error);
    }
  };

  return (
    <View style={styles.container}>
      {image && <Image source={{ uri: image }} style={[styles.image, styles.uploadedImage]} />}
      <View style={styles.uploadBtnContainer}>
        <TouchableOpacity onPress={pickImage} style={styles.uploadBtn}>
          <Text style={{ color: 'white' }}>{image ? 'Edit' : 'Upload'} Image</Text>
          <AntDesign name="camera" size={20} color="white" />
        </TouchableOpacity>
      </View>
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
    zIndex: 1 // Ensure the image is displayed on top
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
    justifyContent: 'center'
  }
});
