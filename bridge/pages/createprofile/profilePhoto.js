import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImagePicker from 'react-native-image-picker';

function profilePhoto() {
  return (
    <View>
        <text>Pick a </text>
    </View>
  );
}

const openImagePicker = () => {
    const options = {
      title: 'Select Avatar',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
  
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        setImage(response.uri);
      }
    });
  };



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  avatar: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
