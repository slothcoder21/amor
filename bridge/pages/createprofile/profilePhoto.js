import React, {useState} from 'react';
import { View, Text, StyleSheet, Image, Platform, TouchableOpacity} from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

export default function UploadImage() {
    const [image, setImage] = useState(null);
    const addImage= async ()=>{
        let _image = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4,3],
            quality:1,
        });
        console.log(JSON.stringify(_image));
        if(!_image.canceled){
            setImage(_image.uri);
        }
    };
    return (
        <View style={styles.container}>
            {
                image && <Image source={{uri: image}} style={{width: 200, height: 200}} />
            }
                <View style={styles.uploadBtnContainer}>
                    <TouchableOpacity onPress={addImage} style={styles.uploadBtn}>
                        <Text>{image ? 'Edit' : 'Upload'} Image</Text>
                        <AntDesign name="camera" size={20} color="black" />
                    </TouchableOpacity>
                </View>

        </View>
    )
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
  },

  uploadBtnContainer: {
    opacity: 0.7,
    position: 'absolute',
    right: 0,
    bottom: 0,
    backgroundColor: '#9FA54B',
    width: '100%',
    height: '25%',
  },
  uploadBtn: {
    display: 'flex',
    alignItems: "center",
    justifyContent: 'center'
  }
  

});

